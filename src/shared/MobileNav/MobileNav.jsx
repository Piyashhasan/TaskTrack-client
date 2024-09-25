import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MobileNav = ({ toggleMobileMenu, setToggleMobileMenu }) => {
  const { name, email } = useSelector((state) => state.auth.user);

  return (
    <div className={`overly-effect ${toggleMobileMenu ? "open" : "close"}`}>
      <div
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        className="flex justify-end"
      >
        <ImCross className="text-2xl cursor-pointer text-[#0d0e43] mr-[13px] mt-[-1px]" />
      </div>
      <div className="py-20">
        <ul className="flex flex-col items-center justify-center gap-8">
          {!name && !email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="bg-blue-500 py-3 px-8 text-white rounded-xl hover:bg-[#1ABC9C]"
                to="/sign-in"
              >
                Sign In
              </Link>
            </li>
          )}

          {!name && !email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="bg-blue-500 py-3 px-8 text-white border border-1 border-[#2FCD71] rounded-xl"
                to="/sign-up"
              >
                Sign Up
              </Link>
            </li>
          )}

          {name && email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="bg-blue-500 py-3 px-8 text-white border border-1 border-[#2FCD71] rounded-xl"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
