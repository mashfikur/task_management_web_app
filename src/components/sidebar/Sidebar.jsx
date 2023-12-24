import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import defaultUser from "../../assets/images/user.png";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="lg:h-[80vh] rounded-xl bg-[#1c47ad] shadow-2xl text-white px-3 py-1">
      <h3 className="text-center mt-10 font-semibold text-3xl p-4">
        {" "}
        {moment().format("MMM Do , YYYY")}{" "}
      </h3>

      <div className="mt-6">
        <ul className="space-y-4 text-lg font-semibold">
          <li>
            <img
              className="mx-auto rounded-full size-32 object-cover shadow-2xl"
              src={user.photoURL ? user.photoURL : defaultUser}
              alt="user-photo"
            />
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-tasks"
              className={({ isActive, isPending }) =>
                isActive ? "sideLink" : isPending ? "pending" : ""
              }
            >
              My Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "sideLink" : isPending ? "pending" : ""
              }
              to="/dashboard/add-task"
            >
              Add Task
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
