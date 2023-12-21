import PropTypes from "prop-types";
import { navLinks } from "../navbar/navLinks";

const Drawer = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 pt-12 w-80 min-h-full bg-base-200 text-lg">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

Drawer.propTypes = {
  children: PropTypes.node,
};
