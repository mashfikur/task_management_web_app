import { Link, NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";
import navLogo from "../../assets/favicon/android-chrome-512x512.png";
import { MdOutlineMenu } from "react-icons/md";
import defaultUser from "../../assets/images/user.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, userSignOut } = useAuth();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="py-6 px-2">
      <div className="navbar container mx-auto bg-black text-white shadow-xl border-none rounded-full px-6 lg:px-12 py-3">
        <div className="navbar-start">
          <Link className="lg:text-4xl font-orbitron font-semibold  flex items-center gap-3">
            {" "}
            <img
              className=" size-[2rem] lg:size-[2.5rem]"
              src={navLogo}
              alt="navigation-logo"
            />{" "}
            SwiftTask
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            {loading ? (
              ""
            ) : user ? (
              <>
                {" "}
                {navLinks}{" "}
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>{" "}
              </>
            ) : (
              navLinks
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          {loading ? (
            <span className="loading loading-lg loading-spinner text-info"></span>
          ) : user ? (
            <div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="size-[1.5rem]"
                    src={defaultUser}
                    alt="default-user"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className=" dropdown-content  z-[1] menu p-2 shadow bg-blue-600 rounded-box w-52 text-lg font-semibold space-y-4 text-center"
                >
                  <li className="text-2xl">{user.displayName}</li>
                  <li className="bg-white px-4 py-2 rounded-full text-blue-700">
                    {user.email}
                  </li>

                  <button onClick={handleSignOut} className="btn btn-neutral">
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/sign-in"
              className="btn text-white border-none rounded-xl px-6 bg-[#2864EF] hover:bg-[#2864EF] hidden lg:flex"
            >
              Sign In
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          <label htmlFor="my-drawer" className=" drawer-button ">
            <MdOutlineMenu className="text-2xl " />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
