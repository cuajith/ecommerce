import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import FilterPage from "./Screen/FilterPage";
import Body from "./Screen/Front Page/Body";

function App() {
  return (
    <>
      <div className="front-page">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/filter" element={<FilterPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
