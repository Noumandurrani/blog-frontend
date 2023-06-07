import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function SignUp() {
  return (
    <div style={{ marginTop: 150 }}>
      <div className="container">
        {/* <h2 className="text-center">SignUp</h2>
        <hr></hr> */}

        <div
          className="row"
          style={{
            height: "450px",
            boxShadow:
              "5px 10px 10px rgb(178, 178, 178),-5px -5px 5px rgb(204, 204, 204)",
            borderRadius: "19px",
          }}
        >
          <div
            className="col-lg-7 d-flex flex-column justify-content-center align-items-center bg-danger p-3"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
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
              Welcome Back!
            </h1>
            <p style={{ fontSize: "15px" }}>
              To keep connected with us please login with your personal info
            </p>

            <Link
              to="/login"
              style={{
                textDecoration: "none",
                width: "30%",
                borderRadius: "30px",
              }}
              className="btn btn-transparent border border-light px-5 pt-2 pb-2 mt-2 text-white"
            >
              LOGIN
            </Link>
          </div>
          <div
            className="col-lg-5 px-5  pb-2 d-flex flex-column justify-content-center"
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
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
              Create Account
            </h2>
            {/* <hr></hr> */}
            <form className="mt-4 mb-4">
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Name:</label>
                <input className="form-control border border-dark"></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Email:</label>
                <input className="form-control border border-dark"></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Password:</label>
                <input className="form-control border border-dark"></input>
              </div>
              <button
                className="btn btn-dark border border-dark px-5 pt-2 pb-2 mt-2"
                type="submit"
                style={{ width: "100%", color: "light" }}
              >
                Create Account
              </button>
            </form>
            {/* <div className="mt-4 fw-bold d-flex">
            <div>already have an account?</div>
            <Link
              className="mx-2"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </div> */}
          </div>
          {/* ///////////////////// */}
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default SignUp;
