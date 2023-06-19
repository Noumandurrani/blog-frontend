import React, { useState } from "react";
import { Link} from "react-router-dom";
// import OIP from "./Logos/OIP.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navgate = useNavigate()
  //call login api 
  const [loginEmail, setLoginEmail] = useState()
  const [loginPass, setLoginPass] = useState()

  const handleLogin = (event)=>{
    event.preventDefault();
    axios.post("http://127.0.0.1:4000/api/project/user/login",{email:loginEmail, password
    : loginPass}).then((res)=>{
      console.log("login response", res.data)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isloggedIn", true)
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("isloggedIn"));

      navgate("/OffCanvas")
    }).catch((err)=>{
      console.log("error loggin", err);
    });
  };

    return (
    <div style={{ marginTop: 150 }}>
      {/* <h3
        className=" text-center"
        style={{
          backgroundColor: "#dfbfb1",
          fontSize: "70px",
          height: 180,
          paddingTop: "40px",
          fontWeight: "bolder",
        }}
      >
        Login
      </h3>
      <hr></hr> */}
      <div className="container ">
        {/* <h2 className="text-center">Login</h2>
        <hr></hr> */}
        <div
          className="row"
          style={{
            // height: "100%"
            height: "450px",
            boxShadow:
              "5px 15px 10px rgb(178, 178, 178),-5px -5px 5px rgb(204, 204, 204)",
            borderRadius: "19px",
          }}
        >
          <div
            className="d-flex flex-column justify-content-center col-lg-5 px-5  pb-2  "
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <h2
              className="text-center"
              style={{
                // backgroundColor: "#dfbfb1",
                // fontSize: "30px",
                // height: 180,
                // paddingTop: "40px",
                fontWeight: "bolder",
              }}
            >
              Login
            </h2>
            {/* <hr></hr> */}
            <form className="mt-4 mb-4" onSubmit={handleLogin}>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Email:</label>
                <input className="form-control border border-dark" value={loginEmail} type="email" onChange={(e)=>{setLoginEmail(e.target.value)}}></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Password:</label>
                <input className="form-control border border-dark" value={loginPass} type="password" onChange={(e)=>{setLoginPass(e.target.value)}}></input>
              </div>
              <div className=" mb-3">
                <div  style={{ textDecoration: "none" }}>
                  Forgot your password?
                </div>
              </div>
              <button
                className="btn btn-dark border border-dark px-5 pt-2 pb-2 mt-2"
                type="submit"
                style={{ width: "100%", color: "light" }}
              >
                Login
              </button>
            </form>
            {/* <div className="mt-4 fw-bold d-flex">
            <div>New to Blog Site?</div>
            <Link
              className="mx-2"
              to="/signup"
              style={{ textDecoration: "none" }}
            >
              Sign up
            </Link>
          </div> */}
          </div>
          {/* ///////////////////// */}
          <div
            className="col-lg-7 d-flex flex-column justify-content-center align-items-center bg-danger p-3"
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "bolder",
                marginLeft: "120px",
                marginRight: "120px",
              }}
              className=""
            >
              Hello Friend!
            </h1>
            <p style={{ fontSize: "15px" }}>
              Enter your personal details and start journey with us
            </p>

            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                width: "30%",
                borderRadius: "30px",
              }}
              className="btn btn-transparent border border-light px-5 pt-2 pb-2 mt-2 text-white"
            >
              SIGN UP
            </Link>
          </div>
          {/* //////////////////////////// */}
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Login;
