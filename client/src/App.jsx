import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Components/Layouts/AdminLayout";
import PaginatedTable from "./pages/AdminViewPage";
import RegisterPage from "./pages/RegistrationPage";
import ManagerLayout from "./Components/Layouts/ManagerLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const columns = [
    { id: "visitorName", label: "Name" },
    { id: "employeeName", label: "Name" },
    { id: "reason", label: "fd" },
    { id: "companyName", label: "fd" },
    { id: "companyAddress", label: "fd" },
  ];

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="view" element={<PaginatedTable columns={columns} />} />
        </Route>
        <Route
          path="/manager"
          element={
            <>
              <ManagerLayout />
              <div id="recaptcha-container"></div>
            </>
          }
        >
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
