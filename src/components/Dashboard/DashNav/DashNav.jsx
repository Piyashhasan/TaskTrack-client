import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useSelector } from "react-redux";

const DashNav = () => {
  const [visible, setVisible] = useState(false);

  // --- all task get from redux store ---
  const { allTasks } = useSelector((state) => state.tasks);

  // --- pending task ---
  const pendingTask = allTasks?.filter(
    (task) => task.completed === false
  ).length;

  return (
    <nav className="bg-[#F9F9F9] py-5 px-3 flex items-center justify-between z-20">
      {/* --- dashboard nav left side start --- */}
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
            You have <span className="text-[#40C057]">{pendingTask}</span>{" "}
            active tasks
          </p>
        </div>
      </div>
      {/* --- dashboard nav left side end --- */}

      {/* --- add task button start --- */}
      <div className="mr-2">
        <button
          onClick={() => setVisible(true)}
          className="bg-[#1ABC9C] text-white text-[14px] px-8 py-3 rounded-full hover:bg-[#00A1F1]"
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
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          <AddTaskForm setVisible={setVisible} />
        </Dialog>
      </div>
      {/* --- add task button start --- */}
    </nav>
  );
};

export default DashNav;
