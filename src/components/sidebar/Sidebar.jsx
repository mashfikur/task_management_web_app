import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[80vh] rounded-xl bg-[#1c47ad] shadow-2xl text-white p-3">
      <div className="mt-20">
        <ul className="space-y-4 text-lg font-semibold">
          <li>
            <Link to="/dashboard">Dashboard</Link>
            <hr />
          </li>
          <li>
            <Link>My Tasks</Link>
            <hr />
          </li>
          <li>
            <Link>Add Task</Link>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
