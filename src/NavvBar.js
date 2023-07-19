import React from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoo from "./Components/Logos/logoo.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
// import logo1 from "./Components/Logos/logo1.JPGs"

function NavvBar() {
  let blogAll = "all";
  const navgate = useNavigate();
  const handleLogout = (e) => {
    localStorage.clear();
    // localStorage.setItem("isloggedIn", false);
    navgate("/");
  };
  const [showCategory, setShowCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/get/category")
      .then((res) => {
        console.log(res.data.data);
        setShowCategory(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Navbar
        // bg="light"
        expand="lg md"
        style={{
          // backgroundColor: "dark",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 2000,
          paddingTop: 10,
          paddingBottom: 10,
          // fontWeight: "",
          // fontSize: 18,
          zIndex: 1000,
          fontSize: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <div className="container">
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={logoo} alt="logo" style={{ height: 90 }}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="" aria-controls="navvbar-navv">
            <i class="fa fa-solid fa-bars fs-3"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navvbar-navv" style={{ justifyContent: "end" }}>
            <Nav className="" variant="underline">
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/blogg/${blogAll}`} className="nav-link">
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavDropdown title="Category" id="navv-dropdown">
                {showCategory.map((item) => (
                  <NavDropdown.Item key={item.id}>
                    <Link
                      to={`/blogg/${item.categoryName}`}
                      // to={"/blogg/:" + all}
                      className="nav-link"
                    >
                      {item.categoryName}
                    </Link>
                  </NavDropdown.Item>
                ))}
                {/* <NavDropdown.Item>
                  <Link to="/about" className="nav-link">
                    A-Category
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" className="nav-link">
                    B-Category
                  </Link>
                </NavDropdown.Item> */}
              </NavDropdown>
              <NavItem style={{ marginRight: "160px" }}>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                {localStorage.getItem("isloggedIn") ? (
                  <Button
                    onClick={handleLogout}
                    className="btn fs-6 btn-danger px-3"
                    style={{
                      paddingTop: "11px",
                      paddingBottom: "10px",
                      width: 100,
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link
                    to="/login"
                    className="btn fs-6 nav-link bg-warning border border-warning px-1 d-inline-block text-center rounded"
                    style={{ width: 100 }}
                  >
                    Login
                  </Link>
                )}
              </NavItem>
              <NavItem className="">
                {localStorage.getItem("isloggedIn") ? (
                  localStorage.getItem("userRole") === "admin" ? (
                    <Link
                      to="/superadmin"
                      className="btn fs-6 nav-link border border-warning px-1 d-inline-block text-center rounded bg-warning text-light"
                      style={{ width: 120 }}
                    >
                      Admin Dash
                    </Link>
                  ) : (
                    <Link
                      to="/offcanvas"
                      className="btn fs-6 nav-link border border-warning px-1 d-inline-block text-center rounded bg-warning text-light"
                      style={{ width: 120 }}
                    >
                      User Dash
                    </Link>
                  )
                ) : (
                  <Link
                    to="/signup"
                    className="btn fs-6 nav-link border border-warning px-1 d-inline-block text-center rounded"
                    style={{ width: 120 }}
                  >
                    Sign up
                  </Link>
                )}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavvBar;
