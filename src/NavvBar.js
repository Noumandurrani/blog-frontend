import React from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoo from "./Components/Logos/logoo.jpg";
function NavvBar() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg md"
        style={{
          // backgroundColor: "dark",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          paddingTop: 10,
          paddingBottom: 10,
          // fontWeight: "",
          // fontSize: 18,
          zIndex: 1000,
          fontSize: "20px",
        }}
      >
        <div className="container">
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={logoo} alt="logo" style={{ height: 90 }}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navvbar-navv"></Navbar.Toggle>
          <Navbar.Collapse id="navvbar-navv" style={{ justifyContent: "end" }}>
            <Nav className="" variant="underline">
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/blogg" className="nav-link">
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavDropdown title="Category" id="navv-dropdown">
                <NavDropdown.Item>
                  <Link to="/about" className="nav-link">
                    A-Category
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" className="nav-link">
                    B-Category
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavItem style={{ marginRight: "200px" }}>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/login"
                  className="nav-link bg-warning border border-warning px-1 d-inline-block text-center"
                  style={{ width: 100 }}
                >
                  Login
                </Link>
              </NavItem>
              <NavItem className="">
                <Link
                  to="/signup"
                  className="nav-link border border-warning px-1 d-inline-block text-center"
                  style={{ width: 100 }}
                >
                  Sign up
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavvBar;
