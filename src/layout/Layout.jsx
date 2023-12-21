import { Outlet } from "react-router-dom";
import Drawer from "../components/drawer/Drawer";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Drawer>
        <div className=" container  mx-auto">
          <Outlet></Outlet>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
