import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Layout from "./layout/Layout";
import Authentication from "./pages/Authentication/Authentication";
import ProtectedRoutes from "./component/HOC/ProtectedtRoutes";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Admin from "./pages/Admin/Admin";
import CustomerList from "./pages/Admin/CustomerList/CustomerList";
import AdminLayout from "./layout/AdminLayout";
import AddCustomer from "./pages/Admin/CustomerList/AddCustomer";
import ProductList from "./pages/Admin/ProductList/ProductList";
import AddProduct from "./pages/Admin/ProductList/AddProduct";
import OrderList from "./pages/Admin/OrderList/OrderList";

function App() {
  // Define a higher-order function to check if the user is signed in
  const ProtectedLayout = ProtectedRoutes(Layout);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/customerList" element={<CustomerList />} />
          <Route path="/admin/add-customer" element={<AddCustomer />} />
          <Route path="/admin/orderList" element={<OrderList />} />
          <Route path="/admin/productList" element={<ProductList />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
