import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
function SignUp() {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleRegSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:4000/api/project/create-user", {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        console.log("reg:", res.data);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: 150 }}>
      <div className="container">
        <div
          className="row"
          style={{
            height: "",
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
            <form className="mt-4 mb-4" onSubmit={handleRegSubmit}>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Firstname:</label>
                <input
                  className="form-control border border-dark"
                  value={userFirstName}
                  type="type"
                  onChange={(e) => {
                    setUserFirstName(e.target.value);
                  }}
                ></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Lastname:</label>
                <input
                  className="form-control border border-dark"
                  value={userLastName}
                  type="type"
                  onChange={(e) => {
                    setUserLastName(e.target.value);
                  }}
                ></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2" value={userEmail}>
                  Email:
                </label>
                <input
                  className="form-control border border-dark"
                  type="email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className=" mb-3">
                <label className="fw-bold  mb-2">Password:</label>
                <input
                  className="form-control border border-dark"
                  type="password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                ></input>
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
