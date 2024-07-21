import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Components/Layouts/AdminLayout";
import PaginatedTable from "./pages/AdminViewPage";
import RegisterPage from "./pages/RegistrationPage";
import ManagerLayout from "./Components/Layouts/ManagerLayout";

function App() {
  const columns = [
    { id: "visitorName", label: "Name" },
    { id: "employeeName", label: "Name" },
    { id: "reason", label: "fd" },
    { id: "companyName", label: "fd" },
    { id: "companyAddress", label: "fd" },
  ];

  const generateSampleData = (numRows) => {
    const names = [
      "John Doe",
      "Jane Doe",
      "Jim Green",
      "Jake White",
      "Jill Brown",
    ];
    return Array.from({ length: numRows }, (_, index) => ({
      id: index + 1,
      name: names[index % names.length],
      age: Math.floor(Math.random() * 50) + 20,
    }));
  };

  const data = generateSampleData(90);

  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path="view"
          element={<PaginatedTable data={data} columns={columns} />}
        />
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
  );
}

export default App;
