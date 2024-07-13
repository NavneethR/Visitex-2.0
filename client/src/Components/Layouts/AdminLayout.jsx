import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const AdminLayout = ({ navbar = true }) => {
  return (
    <>
      {navbar && <NavigationBar />}
      <Outlet style={{ margin: "30px" }} />
    </>
  );
};

export default AdminLayout;
