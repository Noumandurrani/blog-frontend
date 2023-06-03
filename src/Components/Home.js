import React from "react";
import Blog from "./Blog";
import About from "./About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import aaa from "./aaa.jpg";
import bbb from "./bbb.jpg";
import LatestPost from "./HomeComp/LatestPost";
function Home(props) {
  return (
    <div className="text-center">
      <h3>{props.name.page}</h3>
      <div className="row mb-5">
        <div
          className="col-lg-6 col-md-6"
          style={{
            height: 600,
            backgroundImage: `url(${aaa})`,
            backgroundSize: "100% 100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/blogg"
            style={{
              textDecoration: "none",
            }}
          >
            <h1>BLOG1</h1>
          </Link>
          {/* <Routes>
            <Route path="/blogg" element={<Blog></Blog>}></Route>
          </Routes> */}
        </div>
        {/* /////////////////////////////////////////// */}
        <div
          className="col-lg-6 col-md-6"
          style={{
            height: 600,
            backgroundImage: `url(${bbb})`,
            backgroundSize: "100% 100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/blogg"
            style={{
              textDecoration: "none",
            }}
            className=""
          >
            <h1>BLOG2</h1>
          </Link>
        </div>
      </div>
      <h2 className="">My Latest Posts</h2>
      <LatestPost></LatestPost>
    </div>
  );
}

export default Home;

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */
}
