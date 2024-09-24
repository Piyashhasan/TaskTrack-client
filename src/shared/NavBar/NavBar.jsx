import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { name, email } = useSelector((state) => state.auth.user);

  return (
    <nav>
      <div className="wrapper py-4">
        <div className="flex items-center justify-between">
          <Link to="/home">
            <div className="flex items-center gap-5">
              <div className="w-[50px] h-[50px] object-contain object-center">
                <img src={logo} alt="logo" />
              </div>
              <p className="text-[24px] font-bold text-[#2FCD71]">
                Task <span className="text-gray-500">Track</span>
              </p>
            </div>
          </Link>

          <div>
            <ul className="flex items-center gap-8">
              {!name && !email && (
                <li>
                  <Link
                    className="bg-[#2FCD71] py-3 px-8 text-white rounded-xl hover:bg-[#1ABC9C]"
                    to="/sign-in"
                  >
                    Sign In
                  </Link>
                </li>
              )}

              {!name && !email && (
                <li>
                  <Link
                    className="py-3 px-8 text-[#2FCD71] border border-1 border-[#2FCD71] rounded-xl hover:bg-[#1ABC9C] hover:text-white"
                    to="/sign-up"
                  >
                    Sign Up
                  </Link>
                </li>
              )}

              {name && email && (
                <li>
                  <Link
                    className="py-3 px-8 text-[#2FCD71] border border-1 border-[#2FCD71] rounded-xl hover:bg-[#1ABC9C] hover:text-white"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
