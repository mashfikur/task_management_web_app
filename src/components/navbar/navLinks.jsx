import { NavLink } from "react-router-dom";

export const navLinks = (
  <>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "" : isPending ? "pending" : ""
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "" : isPending ? "pending" : ""
        }
        to="/"
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "" : isPending ? "pending" : ""
        }
        to="/"
      >
        Pricing
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "" : isPending ? "pending" : ""
        }
        to="/"
      >
        Download
      </NavLink>
    </li>
  </>
);
