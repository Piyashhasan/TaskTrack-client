import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isPrivate }) => {
  const token = localStorage.getItem("token");

  if (isPrivate) {
    return token ? element : <Navigate to="/sign-in" />;
  } else {
    return !token ? element : <Navigate to="/dashboard" />;
  }
};

export default PrivateRoute;
