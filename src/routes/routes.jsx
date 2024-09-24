import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Main/Home/Home";
import SignIn from "../pages/Main/SignIn/SignIn";
import SignUp from "../pages/Main/SignUp/SignUp";
import Dashboard from "../layout/DashboardLayout/DashboardLayout";
import AllTask from "../pages/Dashboard/AllTask/AllTask";
import CompleteTask from "../pages/Dashboard/CompleteTask/CompleteTask";
import PendingTask from "../pages/Dashboard/PendingTask/PendingTask";
import OverDueTask from "../pages/Dashboard/OverDueTask/OverDueTask";
import NotFound from "../shared/NotFound/NotFound";
import PrivateRoute from "../shared/PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <PrivateRoute element={<SignIn />} isPrivate={false} />,
      },
      {
        path: "sign-up",
        element: <PrivateRoute element={<SignUp />} isPrivate={false} />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="all" />,
      },
      {
        path: "all",
        element: <PrivateRoute element={<AllTask />} isPrivate={true} />,
      },
      {
        path: "complete",
        element: <PrivateRoute element={<CompleteTask />} isPrivate={true} />,
      },
      {
        path: "pending",
        element: <PrivateRoute element={<PendingTask />} isPrivate={true} />,
      },
      {
        path: "due",
        element: <PrivateRoute element={<OverDueTask />} isPrivate={true} />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
