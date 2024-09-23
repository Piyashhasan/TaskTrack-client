import PriorityFilterBtn from "../../../components/Dashboard/PriorityFilterBtn/PriorityFilterBtn";
import Task from "../../../components/Dashboard/Task/Task";

const OverDueTask = () => {
  return (
    <div className="p-4 bg-[#EDEDED] rounded-t-[20px] h-[calc(100vh-90px)] overflow-y-scroll scrollbar-hide">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold leading-8 text-black">
          Overdue Tasks
        </h2>
        <PriorityFilterBtn />
      </div>
      <Task />
    </div>
  );
};

export default OverDueTask;
