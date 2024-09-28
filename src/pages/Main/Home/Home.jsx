import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.png";

const Home = () => {
  return (
    <div className="wrapper py-20 px-4 xl:px-0">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[28px] sm:text-[38px] text-gray-700 font-semibold capitalize my-5">
            Unlock your productivity today ..!
          </h1>
          <p className="text-[14px] sm:text-[16px] text-gray-700 leading-7">
            Welcome to <span className="text-[#40C057]">Task Track!</span>{" "}
            Easily organize tasks, track progress,{" "}
            <br className="hidden sm:block" /> and boost productivity. Say
            goodbye to chaos, hello to <br className="hidden sm:block" />{" "}
            efficiency. Get started now!
          </p>
          <Link to="/dashboard">
            <button className="my-10 bg-[#2FCD71] px-10 py-3 text-white rounded-md">
              Let&apos;s get started!
            </button>
          </Link>

          <div className="flex items-center justify-center mt-5">
            <div className="p-1 max-w-[850px] object-contain shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)] rounded-md">
              <img className="rounded-md" src={banner} alt="Banner Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
