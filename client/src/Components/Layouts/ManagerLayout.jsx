import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const ManagerLayout = () => {
  return (
    <>
      <NavigationBar client={true} />
      <Outlet />
    </>
  );
};

export default ManagerLayout;
