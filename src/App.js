import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Screen/Front Page/Body";

function App() {
  return(
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Body />} />
    </Routes> 
  </>
  )
}

export default App;
