import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.png";

const Home = () => {
  return (
    <div className="wrapper py-20">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[38px] text-gray-700 font-semibold capitalize my-5">
            Unlock your productivity today ..!
          </h1>
          <p className="text-gray-700 leading-7">
            Welcome to <span className="text-[#2FCD71]">Task Track!</span>{" "}
            Easily organize tasks, track progress, <br /> and boost
            productivity. Say goodbye to chaos, hello to <br /> efficiency. Get
            started now!
          </p>
          <Link to="/dashboard">
            <button className="my-10 bg-[#2FCD71] px-10 py-3 text-white rounded-md">
              Let&apos;s get started!
            </button>
          </Link>

          <div className="flex items-center justify-center mt-5">
            <div className="p-5 max-w-[850px] object-contain shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)] rounded-md">
              <img className="rounded-md" src={banner} alt="Banner Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
