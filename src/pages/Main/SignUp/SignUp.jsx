import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className="wrapper py-5">
      <div className="flex items-center justify-center">
        <form className="relative m-[2rem] px-10 py-14 rounded-lg w-full max-w-[520px] shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)]">
          <div className="relative z-10">
            <h1 className="mb-2 text-center text-[1.35rem] font-medium">
              Register for an Account
            </h1>
            <p className="mb-8 px-[2rem] text-center text-[#999] text-[12px]">
              Create an account. Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
              >
                Login here
              </Link>
            </p>
            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#999]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                placeholder="John Doe"
              />
            </div>
            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#999]">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="relative mt-[1rem] flex flex-col">
              <label htmlFor="password" className="mb-1 text-[#999]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                placeholder="***************"
              />
              <button
                type="button"
                className="absolute p-1 right-4 top-[46%] text-[22px] text-[#999] opacity-45"
              >
                {showPassword ? (
                  <IoMdEye className="text-[26px]" onClick={togglePassword} />
                ) : (
                  <IoMdEyeOff
                    className="text-[26px]"
                    onClick={togglePassword}
                  />
                )}
              </button>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
