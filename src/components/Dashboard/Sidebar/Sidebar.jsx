import { RxDashboard } from "react-icons/rx";
import {
  MdOutlinePendingActions,
  MdOutlineTimer,
  MdAddTask,
} from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-90px)] bg-[#F9F9F9] px-[30px] pt-10 relative">
      <ul className="flex flex-col items-center gap-y-10">
        <li className="relative group">
          <NavLink
            to="/dashboard/all"
            className={({ isActive }) => (isActive ? "active" : "inActive")}
          >
            <RxDashboard />
          </NavLink>
          <span className="tooltip">All</span>
        </li>
        <li className="relative group">
          <NavLink
            to="/dashboard/complete"
            className={({ isActive }) => (isActive ? "active" : "inActive")}
          >
            <MdAddTask />
          </NavLink>
          <span className="tooltip">Complete</span>
        </li>
        <li className="relative group">
          <NavLink
            to="/dashboard/pending"
            className={({ isActive }) => (isActive ? "active" : "inActive")}
          >
            <MdOutlinePendingActions />
          </NavLink>
          <span className="tooltip">Pending</span>
        </li>
        <li className="relative group">
          <NavLink
            to="/dashboard/due"
            className={({ isActive }) => (isActive ? "active" : "inActive")}
          >
            <MdOutlineTimer />
          </NavLink>
          <span className="tooltip">Overdue</span>
        </li>
      </ul>
      <ul className="flex flex-col items-center gap-y-10 absolute bottom-0">
        <li className="relative group">
          <Link to="/home">
            <RiLogoutCircleLine className="text-[28px] my-5 hover:text-[#41BF81]" />
          </Link>
          <span className="tooltip">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
