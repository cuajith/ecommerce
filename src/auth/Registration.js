import React from 'react'
import "./App.css"
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {toast,ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = (props) =>{
  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName:'',
      email: '',
      password:'',
      confirmPassword:''
    },
    validationSchema:yup.object({
      fullName:yup.string()
      .required("This field is required")
      .strict()
      .trim()
      .min(5, "Minimum 5 characters required")
      .max(15, "Maximum 15 characters only"),
      userName:yup.string()
      .required("This field is required")
      .min(5, "Minimum 5 characters required")
      .max(10, "Maximum 15 characters only"),
      email:yup.string()
      .email('Enter valid Email Address')
      .strict()
      .trim()
      .required("This field is required"),
      password: yup.string()
      .strict()
      .trim()
      .required("This field is required"),
      confirmPassword: yup.string()
      .oneOf([yup.ref('password'),null], "Password and Confirm Password must be same")
      .required("This field is required")
    }),
    onSubmit:(data) => {
      console.log(data)
      axios.post('http://localhost:4000/api/register',data)
      .then(res=>{
          toast.success("Success Notification!");
        props.history.push('/login');
        
      })
      .catch(err=>{
        toast.error(err.response.data);
      })
    }
  });
  return (
    <div className="container">
      <div class="">
        <h4 className='heading'>Registration</h4>
       <form autoComplete='off' onSubmit={formik.handleSubmit}>
         <div className="form-group py-2 mt-5">
           <label>FullName:</label>
           <input 
           className="form-control"
           type='text'
           name='fullName'
           onChange={formik.handleChange}
           value={formik.values.fullName}
           />
           {
             formik.errors.fullName?
             <div className='text-danger'>{formik.errors.fullName}</div>
             :null
           }
         </div>
         <div className="form-group py-2">
           <label>UserName:</label>
           <input 
           className="form-control"
           type='text'
           name='userName'
           onChange={formik.handleChange}
           value={formik.values.userName}
           />
           {
             formik.errors.userName?
             <div className='text-danger'>{formik.errors.userName}</div>
             :null
           }
         </div>
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
         <div className="form-group py-2">
           <label>Confirm Password:</label>
           <input 
           className="form-control"
           type='password'
           name='confirmPassword'
           onChange={formik.handleChange}
           value={formik.values.confirmPassword}
           />
           {
             formik.errors.confirmPassword?
             <div className='text-danger'>{formik.errors.confirmPassword}</div>
             :null
           }
         </div>
         <button className='btn btn-primary mt-3'>Submit</button>
         <a href="#"
             onClick={()=>{ window.location.href='login';}} className="login-register-link">Login</a>
       </form>
       </div>
       <ToastContainer />
    </div>
  )
}

export default Registration