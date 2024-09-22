import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/all">All</Link>
        </li>
        <li>
          <Link to="/dashboard/complete">Complete</Link>
        </li>
        <li>
          <Link to="/dashboard/pending">Pending</Link>
        </li>
        <li>
          <Link to="/dashboard/due">Over Due</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
