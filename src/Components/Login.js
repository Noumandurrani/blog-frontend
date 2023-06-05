import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OIP from "./Logos/OIP.jpeg";

function Login() {
  return (
    <div className="container " style={{ marginTop: 120 }}>
      <h2 className="text-center">Login</h2>
      <hr></hr>
      <div
        className="row"
        style={{
          height: "400px",
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
          <form className="mt-4 mb-4">
            <div className=" mb-3">
              <label className="fw-bold  mb-2">Name:</label>
              <input className="form-control border border-dark"></input>
            </div>
            <div className=" mb-3">
              <label className="fw-bold  mb-2">Email:</label>
              <input className="form-control border border-dark"></input>
            </div>
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                Forgot your password?
              </a>
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
  );
}

export default Login;
