import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import defaultUser from "../../assets/images/user.png";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="h-[80vh] rounded-xl bg-[#1c47ad] shadow-2xl text-white p-3">
      <h3 className="text-center mt-10 font-semibold text-3xl">
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
            <NavLink
              className={(isActive) => (isActive ? "sideLink" : "")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <hr />
          </li>
          <li>
            <NavLink
              to="/dashboard/my-tasks"
              className={(isActive) => (isActive ? "sideLink" : "")}
            >
              My Tasks
            </NavLink>
            <hr />
          </li>
          <li>
            <NavLink
              className={(isActive) => (isActive ? "sideLink" : "")}
              to="/dashboard/add-task"
            >
              Add Task
            </NavLink>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
