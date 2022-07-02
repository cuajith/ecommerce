import React, { useState } from "react";
import showPassword from "./show-password.svg";
import hidePassword from "./hide-password.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";
import { Button } from "react-bootstrap";

const Createpassword = ({ Email, Otp }) => {
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [errors, setErrors] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const navigate = useNavigate();

  function validate () {
    let errors = {};
    if(pwd.length === 0) {
      errors['pwd'] = "Please enter your password";
    } 
    
    if(pwd.length < 8) {
      errors['pwd'] = "Password must contain at least 8 character"
    }

    if(cpwd.length === 0) {
      errors['cpwd'] = "Please enter your confirm password";
    }

    if(pwd !==null && cpwd !== null) {
    if(pwd !== cpwd) {
      errors['cpwd'] = "Password don't match"
    }
    }
    setErrors(errors);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(validate) {
    let obj = {
      email: Email,
      otp: Otp,
      password: pwd,
    };
    console.log(obj);
    axios.post("http://localhost:3001/password/reset", obj).then((res) => {
      navigate("/");
      
      console.log(res.data);
    });
  }
  };

  return (
    <div className="row justify-content-sm-center pt-5">
      <form>
        <div className="form-group">
          <div className="pwd-container">
            <input
              name="pwd"
              placeholder="Enter Password"
              className="form-control"
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <img
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePassword : showPassword}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
            <div className="text-danger">{errors.pwd}</div>
          </div>
        </div>

        <div className="form-group">
          <div className="pwd-container">
            <input
              name="cpwd"
              placeholder="Re-enter Password"
              className="form-control"
              type={isRevealPwd ? "text" : "password"}
              value={cpwd}
              onChange={(e) => setCpwd(e.target.value)}
            />
            <img
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePassword : showPassword}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
            <div className="text-danger">{errors.cpwd}</div>
          </div>
        </div>

        <Button
          onClick={handleClick}
          style={{ marginTop: "20px" }}
          type="submit"
          className="btn btn-primary my-3 w-100 h-25"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Createpassword;
