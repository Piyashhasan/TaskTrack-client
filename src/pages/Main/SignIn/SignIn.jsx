import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  resetSignInState,
  setUser,
  signInHandler,
} from "../../../features/auth/authSlice";

import toast from "react-hot-toast";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { isSuccess, isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth.signIn
  );

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // --- handle signIn form submit ---
  const onSubmit = (data) => {
    if (data) {
      dispatch(signInHandler(data))
        .then((response) => {
          const { fullName, email } = response.payload;
          dispatch(setUser({ fullName, email }));
        })
        .catch((error) => {
          console.error("Sign-In failed", error);
        });
    }
    reset();
  };

  // --- handle redirect ---
  useEffect(() => {
    if (user.name && user.email) {
      toast.success("Successfully Sign In", { id: "signIn" });
      navigate("/dashboard");
    }
  }, [user, navigate]);

  // --- handle toast  ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "signIn" });
    }

    if (!isLoading && isError) {
      if (errorMessage) {
        toast.error(errorMessage, { id: "signIn" });
      }
      dispatch(resetSignInState());
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
              Login to Your Account
            </h1>
            <p className="mb-8 px-[2rem] text-center text-[#999] text-[12px]">
              Login Now. Don&apos;t have an account?{" "}
              <Link
                to="/sign-up"
                className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
              >
                Register here
              </Link>
            </p>

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
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
