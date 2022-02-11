import {Route, Switch} from "react-router-dom"
import Autocarousels from "./Components/Home/Autocarousels/Autocarousels"
import Productcarousel from "./Components/Home/Productcarousel/Productcarousel"
import AutoPlay from "./Components/Home/Autoplaycarousel/Autoplaycarousel";
import Kitchen from "./Components/Home/Kitchen/Kitchen";
import Registration from './auth/Registration'
import Login from './auth/Login'
import ProtectedRouter from './auth/Protected'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './auth/Home'
import './App.css'

const  Reactrouter= () => {
    return (
        
        <Switch>
            <Route exact path='/' component={ Autocarousels } />
            <Route exact path='/' component={ Productcarousel } />
            <Route exact path='/'component={AutoPlay} />
            <Route exact path='/' component={ Kitchen} />
            <Route exact path='/' component={Login}/>
            <Route exact path='/login' component={Login}/>  
            <Route exact path='/register' component={Registration}/>
            <ProtectedRouter exact path='/home' component={Home} auth={false}/>
            <ToastContainer/>
        </Switch>
    )
}
export default Reactrouter