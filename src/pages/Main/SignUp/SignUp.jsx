import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSignUpState,
  signUpHandler,
} from "../../../features/auth/authSlice";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth.signUp
  );

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // --- handle signUp form submit ---
  const onSubmit = (data) => {
    if (data) {
      dispatch(signUpHandler(data));
    }
    reset();
  };

  useEffect(() => {
    return () => {
      dispatch(resetSignUpState());
    };
  }, [dispatch]);

  // --- handle toast and redirect ---
  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in");
    }

    if (isLoading) {
      toast.loading("Loading ...", { id: "signUp" });
    }
    if (!isLoading && isError) {
      if (errorMessage) {
        toast.error(errorMessage, { id: "signUp" });
      }
    }
    if (isSuccess) {
      toast.success("Successfully Sign Up", { id: "signUp" });
    }
  }, [isSuccess, isLoading, isError, navigate, dispatch, errorMessage]);

  return (
    <div className="wrapper py-5">
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative m-[2rem] px-10 py-14 rounded-lg w-full max-w-[520px] shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)]"
        >
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

            {/* --- full name input --- */}
            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#999]">
                Full Name
              </label>
              <input
                {...register("fullName", {
                  required: "Full is required",
                })}
                type="text"
                id="fullName"
                name="fullName"
                className={`px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
                placeholder="John Doe"
              />
              {/* Error message for full name */}
              {errors.fullName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* --- Email input --- */}
            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#999]">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                id="email"
                name="email"
                className={`px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="johndoe@gmail.com"
              />
              {/* Error message for email */}
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* --- Password input --- */}
            <div className="relative mt-[1rem] flex flex-col justify-center">
              <label htmlFor="password" className="mb-1 text-[#999]">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={` px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="***************"
                autoComplete="password"
              />

              <button
                type="button"
                className="absolute p-1 right-4 top-9 text-[22px] text-[#999] opacity-45"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <IoMdEye className="text-[26px]" />
                ) : (
                  <IoMdEyeOff className="text-[26px]" />
                )}
              </button>
            </div>
            {/* Error message for password */}
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}

            {/* --- Submit button --- */}
            <div>
              <button
                type="submit"
                className="w-full mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
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
