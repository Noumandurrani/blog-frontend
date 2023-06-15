import React from "react";
import Blog from "./Blog";
import About from "./About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import car from "./Logos/car.jpg";
import R from "./Logos/R.jpeg";
import LatestPost from "./HomeComp/LatestPost";
function Home(props) {
  return (
    <div className="text-center" style={{ marginTop: 120 }}>
      {/* <h3>{props.name.page}</h3> */}
      <div className="row mb-5 no-gutters">
        <div className="col-lg-6 col-md-6 overflow-hidden p-0">
          <div
            className=""
            style={{
              height: 600,
              backgroundImage: `url(${car})`,
              backgroundSize: "100% 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "scale(1.0)",
              transformOrigin: "center",
              transition: "0s ease",
              color: "white",
            }}
            onMouseOver={(e) => {
              // e.target.style.backgroundSize = "150%";
              e.target.style.transform = "scale(1.1)";
              e.target.style.transformOrigin = "center";
              e.target.style.transition = "2s ease";
              e.target.style.color = "#d8ba72";
            }}
            onMouseOut={(e) => {
              // e.target.style.backgroundSize = "100% 100%";
              e.target.style.transform = "scale(1.0)";
              e.target.style.transformOrigin = "center";
              e.target.style.transition = "2s ease";
              e.target.style.color = "white";
            }}
          >
            <Link
              to="/blogg"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "70px",
                }}
              >
                BLOG1
              </h1>
            </Link>
            {/* <Routes>
            <Route path="/blogg" element={<Blog></Blog>}></Route>
          </Routes> */}
          </div>
        </div>

        {/* /////////////////////////////////////////// */}
        <div className="col-lg-6 col-md-6 overflow-hidden p-0">
          <div
            className=""
            style={{
              height: 600,
              backgroundImage: `url(${R})`,
              backgroundSize: "100% 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "scale(1.0)",
              transformOrigin: "center",
              overflow: "hidden",
              transition: "0s ease",
              color: "white",
            }}
            onMouseOver={(e) => {
              // e.target.style.backgroundSize = "150%";
              e.target.style.transform = "scale(1.1)";
              e.target.style.transformOrigin = "center";
              e.target.style.transition = "2s ease";
              // e.target.style.overflow = "hidden";
              e.target.style.color = "#d8ba72";
            }}
            onMouseOut={(e) => {
              // e.target.style.backgroundSize = "100% 100%";
              e.target.style.transform = "scale(1.0)";
              e.target.style.transformOrigin = "center";
              e.target.style.transition = "2s ease";
              e.target.style.color = "white";
            }}
          >
            <Link
              to="/blogg"
              style={{
                textDecoration: "none",
                color: "white",
              }}
              className=""
            >
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "70px",
                }}
              >
                BLOG2
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="mb-4">My Latest Posts</h2>
      <LatestPost></LatestPost>
      <Link to="/blogg">
        <button className="btn border border-dark px-5 pb-3 pt-3">
          show more
        </button>
      </Link>
      <br></br>
      <br></br>

      <br></br>

      <Link to="/createpost">
        <button className="btn btn-dark border border-dark px-5 pb-3 pt-3">
          Create Post
        </button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
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
