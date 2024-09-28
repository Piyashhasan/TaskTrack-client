import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useSelector } from "react-redux";

const DashNav = ({ setVisibleRight }) => {
  const [visible, setVisible] = useState(false);

  // --- all task get from redux store ---
  const { allTasks } = useSelector((state) => state.tasks);

  // --- pending task ---
  const pendingTask = allTasks?.filter(
    (task) => task.completed === false
  ).length;

  return (
    <nav className="bg-[#F9F9F9] px-2 py-3 sm:py-5 sm:px-3 flex sm:items-center justify-between z-20">
      {/* --- dashboard nav left side start --- */}
      <div className="flex sm:items-center lg:justify-start gap-x-8 w-full">
        <div className="w-[50px] h-[50px] object-contain object-center">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="sm:w-full sm:flex sm:items-center sm:justify-between ">
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
              You have <span className="text-[#40C057]">{pendingTask}</span>{" "}
              active tasks
            </p>
          </div>
          {/* --- add task button start --- */}
          <div className="mt-[15px] sm:mt-0 sm:mr-10 lg:mr-2">
            <button
              onClick={() => setVisible(true)}
              className="bg-[#1ABC9C] text-white text-[12px] px-4 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-[#00A1F1]"
            >
              Add Task
            </button>
            <Dialog
              visible={visible}
              onHide={() => {
                if (!visible) return;
                setVisible(false);
              }}
              style={{ width: "35vw" }}
              breakpoints={{ "960px": "75vw", "641px": "95vw" }}
            >
              <AddTaskForm setVisible={setVisible} />
            </Dialog>
          </div>
          {/* --- add task button start --- */}
        </div>
      </div>
      {/* --- dashboard nav left side end --- */}

      {/* --- sidebar toggle button start --- */}
      <div className="block lg:hidden">
        <button onClick={() => setVisibleRight(true)}>
          <GiHamburgerMenu className="text-[30px]" />
        </button>
      </div>
      {/* --- sidebar toggle button start --- */}
    </nav>
  );
};

export default DashNav;
