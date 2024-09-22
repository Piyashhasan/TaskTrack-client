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
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
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
        element: <AllTask />,
      },
      {
        path: "complete",
        element: <CompleteTask />,
      },
      {
        path: "pending",
        element: <PendingTask />,
      },
      {
        path: "due",
        element: <OverDueTask />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
