import { Link } from "react-router-dom";
import dashboardbg from "../../assets/images/dasboard-bg.svg";

const DashBoardHome = () => {
  return (
    <div className="flex flex-col items-center ">
      <h3 className="text-center text-4xl font-semibold mt-6">
        Welcome To Dashboard
      </h3>

      <img
        className="mx-auto mt-4"
        src={dashboardbg}
        alt="dashboard-background"
      />

      <Link to="/dashboard/add-task">
        <button className="btn btn-info w-32 mt-12 rounded-full shadow-2xl ">
          {" "}
          {" Let's "}start{" "}
        </button>
      </Link>
    </div>
  );
};

export default DashBoardHome;
