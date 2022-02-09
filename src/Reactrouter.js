import {Route, Routes} from "react-router-dom"
import Autocarousels from "./Components/Home/Autocarousels/Autocarousels"
import Productcarousel from "./Components/Home/Productcarousel/Productcarousel"
import Registration from "./Components/UserResgistration/Registration"
import AutoPlay from "./Components/Home/Autoplaycarousel/Autoplaycarousel";
import Kitchen from "./Components/Home/Kitchen/Kitchen";

const  Reactrouter= () => {
    return (
        
        <Routes>
            <Route exact path='/' element={ <Autocarousels />} />
            <Route exact path='/' element={ <Productcarousel />} />
            <Route exact path='/' element={<AutoPlay/>} />
            <Route exact path='/' element={ <Kitchen/>} />
            <Route exact path="/registration" element={<Registration/>} />
        </Routes>
    )
}
export default Reactrouter