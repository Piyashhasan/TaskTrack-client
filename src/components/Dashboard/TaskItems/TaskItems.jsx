import { CiStar } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskItems = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task One</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#40C057] text-[14px] font-semibold">Low</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task Two</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#FACC15] text-[14px] font-semibold">Medium</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task Three</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#F65314] text-[14px] font-semibold">High</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task One</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#40C057] text-[14px] font-semibold">Low</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task Two</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#FACC15] text-[14px] font-semibold">Medium</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-5 rounded-lg max-h-[300px]">
        <h5 className="text-xl font-bold leading-8">Task Three</h5>
        <p className="text-[14px] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#9CA3AF] text-[14px]">Today</p>
          <p className="text-[#F65314] text-[14px] font-semibold">High</p>
          <div className="flex items-center gap-3">
            <CiStar className="text-[#9CA3AF] text-[26px] cursor-pointer" />
            <FaRegEdit className="text-[#00A1F1] text-[22px] cursor-pointer" />
            <MdDelete className="text-[#F65314] text-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItems;
