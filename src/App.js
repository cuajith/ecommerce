import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import CartScreen from "./Screen/CartScreen/CartScreen";
import FilterPage from "./Screen/FilterPage";
import Body from "./Screen/Front Page/Body";
import ShippingScreen from "./Screen/ShippingScreen/ShippingScreen";
import ProductDetails from "./Screen/SingleProduct/ProductDetails";


function App() {
  return (
    <>
      <div className="front-page">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/filter" element={<FilterPage/>} />
          <Route exact path='/product/:id' element={<ProductDetails/>} />
          <Route exact path='/cart/:id' element={<CartScreen />} />
          <Route exact path='/shipping' element={<ShippingScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
