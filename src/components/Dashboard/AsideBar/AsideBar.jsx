import userIcon from "../../../assets/images/user.png";
import ActivityChart from "../ActivityChart/ActivityChart";

const data = {
  labels: ["Complete", "Pending"],
  values: [300, 100],
  backgroundColor: ["#2FCD71", "#EB4E31"],
};

const AsideBar = () => {
  return (
    <aside className="h-[calc(100vh-90px)] bg-[#F9F9F9] min-w-[300px] p-5 overflow-y-scroll">
      {/* --- user info start --- */}
      <div className="flex items-center gap-x-4 bg-[#EFEFEF] px-2 py-3 rounded-lg border-2 border-[#EFEFEF] cursor-pointer hover:border-2 hover:border-[#fff]">
        <div className="min-w-[70px] min-h-[70px] flex items-center justify-center bg-[#222161] object-cover object-center rounded-full">
          <img
            className="w-[40px] h-[40px] object-cover object-center rounded-md"
            src={userIcon}
            alt=""
          />
        </div>
        <div>
          <p className="text-[20px] font-medium leading-7 text-black">Hello,</p>
          <p className="text-[20px] font-bold leading-7 text-black">
            Piyash Hasan
          </p>
        </div>
      </div>
      {/* --- user info end --- */}

      {/* --- task count start --- */}
      <div className="grid grid-cols-2 mt-12">
        <div>
          <p className="text-[15px] text-[#9CA3AF] leading-6">Total Tasks:</p>
          <div className="flex items-center gap-x-4 py-2">
            <div className="w-[3px] h-[28px] bg-[#A855F7] rounded-full"></div>
            <h5 className="text-[36px] text-[#333333] font-medium leading-10">
              4
            </h5>
          </div>
        </div>
        <div>
          <p className="text-[15px] text-[#9CA3AF] leading-6">In Progress:</p>
          <div className="flex items-center gap-x-4 py-2">
            <div className="w-[3px] h-[28px] bg-[#3AAFAE] rounded-full"></div>
            <h5 className="text-[36px] text-[#333333] font-medium leading-10">
              3
            </h5>
          </div>
        </div>
        <div>
          <p className="text-[15px] text-[#9CA3AF] leading-6">Open Tasks:</p>
          <div className="flex items-center gap-x-4 py-2">
            <div className="w-[3px] h-[28px] bg-[#FB923C] rounded-full"></div>
            <h5 className="text-[36px] text-[#333333] font-medium leading-10">
              3
            </h5>
          </div>
        </div>
        <div>
          <p className="text-[15px] text-[#9CA3AF] leading-6">Completed:</p>
          <div className="flex items-center gap-x-4 py-2">
            <div className="w-[3px] h-[28px] bg-[#4ADE80] rounded-full"></div>
            <h5 className="text-[36px] text-[#333333] font-medium leading-10">
              1
            </h5>
          </div>
        </div>
      </div>
      {/* --- task count end --- */}

      {/* --- chart section start --- */}
      <div className="mt-10">
        <p className="font-medium text-black leading-6">Activity</p>
        <div className="bg-[#EDEDED] py-3 px-1 rounded-lg mt-10">
          <div className="text-center py-2">
            <p className="text-[#333335] font-bold text-[14px]">
              Completed vs Pending Tasks
            </p>
            <small>Task completion status.</small>
          </div>
          <ActivityChart data={data} />
        </div>
      </div>
      {/* --- chart section end --- */}
    </aside>
  );
};

export default AsideBar;
