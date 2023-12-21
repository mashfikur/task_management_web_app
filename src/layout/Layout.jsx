import { Outlet } from "react-router-dom";
import Drawer from "../components/drawer/Drawer";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Drawer>
        <Outlet></Outlet>
      </Drawer>
    </div>
  );
};

export default Layout;
