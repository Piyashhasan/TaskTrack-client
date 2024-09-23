import { useState } from "react";

const PriorityFilterBtn = () => {
  const [activePriority, setActivePriority] = useState("All");
  const priorities = ["All", "Low", "Medium", "High"];

  return (
    <div className="bg-[#F9F9F9] px-3 py-2 rounded-lg">
      <div className="flex items-center gap-x-3 text-[14px]">
        {priorities.map((priority) => (
          <button
            key={priority}
            onClick={() => setActivePriority(priority)}
            className={`px-5 py-1 rounded-md transition-all duration-300 ease-in-out
              ${
                activePriority === priority ? "bg-[#EDEDED] text-[#4AB5B4]" : ""
              }`}
          >
            {priority}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriorityFilterBtn;
