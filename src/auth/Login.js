import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {toast,ToastContainer  } from 'react-toastify';

const Login = (props) =>{
  const formik = useFormik({
    initialValues: {
     
      email: '',
      password:'',
     
    },
    validationSchema:yup.object({
     
      email:yup.string()
      .email('Enter valid Email Address')
      .strict()
      .trim()
      .required("This field is required"),
      password: yup.string()
      .strict()
      .trim()
      .required("This field is required"),
      
    }),
    onSubmit:(data) => {
      console.log(data)
      axios.post('http://localhost:4000/api/login',data)
      .then(res=>{
          toast.success("Success Notification!");
          localStorage.setItem('auth',JSON.stringify(res.data));
          props.history.push('/');
        
      })
      .catch(err=>{
        toast.error(err.response.data);
      })
    }
  });
  return (
    <div className="container">
      <h4 className='heading'>Login</h4>
       <form autoComplete='off' onSubmit={formik.handleSubmit}>
         
         <div className="form-group py-2">
           <label>Email:</label>
           <input 
           className="form-control"
           type='text'
           name='email'
           onChange={formik.handleChange}
           value={formik.values.email}
           />
           {
             formik.errors.email?
             <div className='text-danger'>{formik.errors.email}</div>
             :null
           }
         </div>
         <div className="form-group py-2">
           <label>Password:</label>
           <input 
           className="form-control"
           type='password'
           name='password'
           onChange={formik.handleChange}
           value={formik.values.password}
           />
           {
             formik.errors.password?
             <div className='text-danger'>{formik.errors.password}</div>
             :null
           }
         </div>
         
         <button className='btn btn-primary mt-3'>Submit</button>
         <a href="#"
             onClick={()=>{ window.location.href='register';}} className="login-register-link">Register</a>
       </form>
       
       <ToastContainer />
    </div>
  )
}

export default Login