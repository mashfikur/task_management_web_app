import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
import navLogo from "../../assets/favicon/android-chrome-512x512.png";

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="navbar container mx-auto bg-black text-white shadow-xl border-none rounded-full px-12 py-3">
        <div className="navbar-start">
          <div>
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <Link className="text-4xl font-orbitron font-semibold  flex items-center gap-3">
            {" "}
            <img
              className="size-[2.5rem]"
              src={navLogo}
              alt="navigation-logo"
            />{" "}
            SwiftTask
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6"> {navLinks} </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral  rounded-full px-12">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
