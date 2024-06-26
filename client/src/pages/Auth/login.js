import Layout from "../../components/layout/layout";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate ,useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/Authstyles.css";
import {useAuth} from "../../context/auth";

const Login = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth("");
    const navigate = useNavigate(); 
    const location = useLocation();
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        
          email,
          password,
         
         // answer,
        });
        console.log(res,"res")
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          })
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate(location.state||"/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  
  return (
    <Layout title="Register - Ecommer App">
     
      <div className="form-container" style={{width: '100%', height: '78vh'}}>
      {/* <img
          src="/images/backgrounf.jpg"
          alt="contactus"
          style={{ width: "100%" }}
        /> */}
        <form onSubmit={(e)=>handleSubmit(e)} className="row" style={{ width: "80%" ,maxWidth:"400px" }}>  
        {/* we need to pass here using arrow function as we are passing e  as an argument*/ }
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3 col-md-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3 col-md-12">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary col-md-12">
            LOGIN
          </button>
        </form>
      </div>
      
    </Layout>
  );
};
export default Login;
