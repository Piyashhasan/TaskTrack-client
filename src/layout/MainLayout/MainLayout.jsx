import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
