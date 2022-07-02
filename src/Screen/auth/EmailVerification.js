import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {Button} from "react-bootstrap"

const EmailVerification = ({emailData}) => {
  console.log(emailData)
  const btnstyle = { marginTop: "28px ", backgroundColor: "#6d7f9f" };
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      email: emailData,
      otp: otp
    }
    console.log(obj)
    axios
    .post("http://localhost:3001/register/verify",obj)
    .then((res) => {
      navigate('/');
      console.log(res.data);
    })
   };

  return (
    <div className="container pt-5">
      <div className="col-6 mx-auto">
        <div className="row">
          <div
            className="row justify-content-sm-center pt-5"
            style={{
              background: "#fff",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
              padding: "25px",
            }}
          >
            <form>
              <div className="form-group">
              <h4 className="reset-password-head">Verify Your Email</h4>
              <input
                      placeholder="Enter 4 Digit OTP"
                      name="otp"
                      type="text"
                      onInput={e=> setOtp(e.target.value)}
                      className={`form-control ${errors.otp && "invalid"} h-25`}
                      {...register("otp", {
                        required: "OTP is Required",
                      })}
                      onKeyUp={() => {
                        trigger("otp");
                      }}
                      style={{ marginTop: "20px" }}
                    />
                    {errors.otp && (
                      <small className="text-danger">
                        {errors.otp.message}
                      </small>
                    )}
                     <Button
                     onClick={handleClick}
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={btnstyle}
                      fullWidth
                    >
                      {" "}
                      Verify{" "}
                    </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailVerification