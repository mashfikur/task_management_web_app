import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
import navLogo from "../../assets/favicon/android-chrome-512x512.png";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
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
          <ul className="flex gap-6"> {navLinks} </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-white border-none rounded-xl px-6 bg-[#2d7bea] hover:bg-[#2d7bea] hidden lg:flex">
            Sign In
          </a>
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
