import React from "react";
import Profile from "./UserDashComp/Profile";
import Post from "./UserDashComp/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Button } from "react-bootstrap";
import {
  Container,
  Nav,
  Navbar,
  OffcanvasHeader,
  // Offcanvas,
  OffcanvasTitle,
  OffcanvasBody,
  // Card,
  // CardImg,
} from "react-bootstrap";
// import { Offcanvas } from "react-bootstrap/Offcanvas";
import { Link, useParams } from "react-router-dom";
// import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import AdminDataUserPost from "./AdminDataUserPost";
import AdminDataUserProfile from "./AdminDataUserProfile";
// import { userInjured } from "fontawesome";

function SuperAdmin() {
  const navgate = useNavigate();
  const [usersProfile, setUsersProfile] = useState(false);
  const [usersPost, setUsersPost] = useState(true);
  const userId = localStorage.getItem("userId");

  return (
    <div style={{ margin: 120 }}>
      {/* <h2>Super Admin</h2> */}
      <Navbar
        expand=""
        // bg="warning"
        // className="justify-content-center"
        style={{
          position: "fixed",
          right: 0,
          left: 0,
          zIndex: 300,
          boxShadow: "3px 3px 3px black",
          backgroundColor: "#1a5260",
          // color: "",
        }}
      >
        <Container fluid className="justify-content-space">
          {/* <Navbar.Brand href="#"></Navbar.Brand> */}
          <Navbar.Toggle
            aria-controls="off-convass"
            className="btn text-light bg-dark p-2 px-3"
            // style={{backgroundColor}}
          >
            Menu
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={"off-convass"}
            placement="top"
            style={{ backgroundColor: "#1b2831" }}
          >
            <OffcanvasHeader closeButton className="bg-light">
              <OffcanvasTitle
              // className="bg-black text-light px-3 pt-2 pb-2"
              >
                Admin Dashboard
              </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <Nav
                onMouseOver={(e) => {
                  e.target.style.color = "red";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white";
                }}
              >
                <Nav.Link
                  href="#"
                  onClick={() => {
                    setUsersProfile(true);
                    setUsersPost(false);
                  }}
                  style={{
                    color: "white",
                  }}
                  className="fw-bold"
                >
                  User Profiles
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => {
                    setUsersProfile(false);
                    setUsersPost(true);
                  }}
                  className="fw-bold"
                  style={{
                    color: "white",
                  }}
                >
                  User Posts
                </Nav.Link>
              </Nav>
            </OffcanvasBody>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          {usersPost && <AdminDataUserPost></AdminDataUserPost>}
          {usersProfile && <AdminDataUserProfile></AdminDataUserProfile>}
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
