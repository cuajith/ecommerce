import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Screen/Front Page/Header/Header";
import Footer from "./Screen/Front Page/Footer/Footer";
import CartScreen from "./Screen/CartScreen/CartScreen";
import FilterPage from "./Screen/FilterPage";
import Body from "./Screen/Front Page/Body";
import ShippingScreen from "./Screen/ShippingScreen/ShippingScreen";
import ProductDetails from "./Screen/SingleProduct/ProductDetails";
import Login from "./Screen/auth/Login";
import Registration from "./Screen/auth/Register";
import Resetpassword from "./Screen/auth/Resetpassword";
import Createpassword from "./Screen/auth/Createpassword";
import EmailVerification from "./Screen/auth/EmailVerification";

function App() {
  return (
    <>
      <div className="front-page">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/filter" element={<FilterPage />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/cart/:id" element={<CartScreen />} />
          <Route exact path="/shipping" element={<ShippingScreen />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Registration />} />
          <Route exact path="/otp" element={<Resetpassword />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
