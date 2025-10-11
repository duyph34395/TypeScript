import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/Layout";
import List from "./pages/List";
import AdminList from "./pages/AdminList";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="products" element={<List />} />
        </Route>
         <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminList />} />
          <Route path="products" element={<AdminList />} />
          <Route path="products/add" element={<Add />} />
          <Route path="products/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
