import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element, isPrivate }) => {
  const token = localStorage.getItem("token");

  if (isPrivate) {
    return token ? element : <Navigate to="/sign-in" />;
  } else {
    return !token ? element : <Navigate to="/dashboard" />;
  }
};

export default PrivateRoute;
