import React from 'react'
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
 
const ProtectedRouter = ({auth, component:Component,...rest})=> {
   
let hasToken = JSON.parse(localStorage.getItem('auth'))
  return (
    
       <Route
        {...rest}
        render={

            props => {
               if(hasToken !== null) return 
                <Component {...props}/>;
                if(hasToken == null) return(
                    <Redirect 
                    to = {{pathname:'/login', state: {from: props.location}}}
                    />
                );
            }
        }
     />
    )
}

export default ProtectedRouter