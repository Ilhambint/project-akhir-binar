import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import InfoPenawar from "./pages/InfoPenawar"
import InfoProduk from "./pages/InfoProduk";
import ProductPageBuyer from "./pages/ProductPageBuyer"
import ProductPage from "./pages/ProductPage"
import DaftarJual from "./pages/DaftarJual";
import Diminati from "./pages/Product/Diminati";
import Terjual from "./pages/Product/Terjual";
import ProductList from "./pages/Product/ProductList";
import Wishlist from "./pages/Product/Wishlist";
import PrivateRoute from "./utils/PrivateRoute";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/info-penawar" element={<PrivateRoute element={InfoPenawar} />} />
        <Route path="/tambah-product" element={<PrivateRoute element={InfoProduk} />} />
        <Route path="/product/:id" element={<PrivateRoute element={ProductPageBuyer} />} />
        <Route path="/product-seller" element={<PrivateRoute element={ProductPage} />} />
        <Route path="/daftar-jual" element={<PrivateRoute element={DaftarJual} />} />
        <Route path="/notification" element={<PrivateRoute element={Notification} />} />

        <Route path="product/">
          <Route index element={<PrivateRoute element={ProductList} />} />
          <Route path="addproduct" element={<PrivateRoute element={InfoProduk} />} />
          {/* <Route path="editproduct" element={<PrivateRoute element={EditProduct} />} /> */}
          <Route path="diminati" element={<PrivateRoute element={Diminati} />} />
          <Route path="terjual" element={<PrivateRoute element={Terjual} />} />
          <Route path="wishlist" element={<PrivateRoute element={Wishlist} />} />
          {/* <Route path="infopenawaran" element={<InfoPenawaran />} /> */}
        </Route>
        {/* <Route path="notification" element={<Notification />} />
        <Route path="infoprofile" element={<InfoProfile />} /> */}
      </Routes>
    </div >
  );
}

export default App;
