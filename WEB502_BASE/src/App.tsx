import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/Layout";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="products" element={<List />} />
          <Route path="products/add" element={<Add />} />
          <Route path="products/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
