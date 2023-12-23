import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="h-[80vh] rounded-xl bg-[#1c47ad] shadow-2xl text-white p-3">
      <div className="mt-20">
        <ul className="space-y-4 text-lg font-semibold">
          <li>
            <img
              className="mx-auto rounded-full shadow-2xl"
              src={user.photoURL}
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
