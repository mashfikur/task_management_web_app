import { Outlet } from "react-router-dom";
import Drawer from "../components/drawer/Drawer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="main">
        <Navbar></Navbar>
        <Drawer>
          <div className=" container  mx-auto">
            <Outlet></Outlet>
          </div>
        </Drawer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
