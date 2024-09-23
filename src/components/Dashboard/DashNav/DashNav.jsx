import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
const DashNav = () => {
  return (
    <nav className="bg-[#F9F9F9] py-5 px-3 flex items-center justify-between">
      <div className="flex items-center gap-x-8">
        <div className="w-[50px] h-[50px] object-contain object-center">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span role="img" aria-label="wave">
              👋
            </span>
            <p className="font-semibold">
              Welcome to <span className="text-[#40C057]">TaskTrack</span>
            </p>
          </div>
          <p className="text-[14px]">
            You have <span className="text-[#40C057]">3</span> active tasks
          </p>
        </div>
      </div>
      <div className="mr-2">
        <button className="bg-[#1ABC9C] text-white text-[14px] px-8 py-3 rounded-full hover:bg-[#00A1F1]">
          Add a new Task
        </button>
      </div>
    </nav>
  );
};

export default DashNav;
