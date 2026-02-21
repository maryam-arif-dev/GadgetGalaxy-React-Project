import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PageNotFound404 from "./pages/PageNotFound404";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
