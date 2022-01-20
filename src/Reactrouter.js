import {Route, Routes} from "react-router-dom"
import Autocarousels from "./Components/Home/Autocarousels/Autocarousels"
import Productcarousel from "./Components/Home/Productcarousel/Productcarousel"


const  Reactrouter= () => {
    return (
        
        <Routes>
                <Route exact path="/" element={<Autocarousels />} />
                <Route exact path="/product" element={<Productcarousel/>} />
        </Routes>
    )
}
export default Reactrouter