import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import Footer from "../../components/footer/Footer";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="min-h-screen">
        <Navbar></Navbar>
        <div className="container mx-auto flex lg:flex-row flex-col gap-8 px-3 mb-6">
          <div className="lg:w-[20%]  ">
            <Sidebar></Sidebar>
          </div>
          <div className="lg:w-[80%]">
            <Drawer>
              <div className="bg-white xl:h-[80vh]  rounded-xl p-3">
                <Outlet></Outlet>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
