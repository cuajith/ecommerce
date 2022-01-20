import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Menubar from "./Components/Navbar/Menubar";
import Autocarousels from "./Components/Home/Autocarousels/Autocarousels"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "./Components/Home/Autoplaycarousel/Autoplaycarousel";
import Trending from "./Components/Home/Categories/Trending";
import Productcarousel from "./Components/Home/Productcarousel/Productcarousel"

function App() {
  return (
    <Router>
       <Menubar />
       <Autocarousels />
       <Productcarousel />
       <AutoPlay/>
       <Trending/>
    </Router>
   
    );
}

export default App;
