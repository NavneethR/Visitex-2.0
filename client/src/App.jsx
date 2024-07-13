import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Components/Layouts/AdminLayout";
import PaginatedTable from "./pages/AdminViewPage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import { AuthContextProvider } from "./context/AuthContext";
// import HomeLayout from "./Components/Layouts/HomeLayout";
// import ClientLayout from "./Components/Layouts/ClientLayout";
// import VisitorRegister from "./pages/VisitorRegister";
// import VisitorLogout from "./pages/VisitorLogout";
// import { VisitorContextProvider } from "./context/VisitorContext";
// import RootAuth from "./pages/RootAuth";

function App() {
  const columns = [
    { id: "id", label: "S.No" },
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
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
    </Routes>
  );
}

export default App;
