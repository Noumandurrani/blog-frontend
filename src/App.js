import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import logoo from "./Components/Logos/logoo.jpg";
import {
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
function App() {
  return (
    <div className="">
      {/* <h1>-------------Blogging Site---------------</h1> */}
      {/* navbar */}
      <Router>
        <Navbar
          bg="light"
          expand="lg md"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: "bold",
            fontSize: 18,
            zIndex: 1000,
          }}
        >
          <div className="container">
            <Navbar.Brand href="#">
              <img src={logoo} alt="logo" style={{ height: 90 }}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navvbar-navv"></Navbar.Toggle>
            <Navbar.Collapse
              id="navvbar-navv"
              style={{ justifyContent: "end" }}
            >
              <Nav>
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
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* ///////////////////////////////////////////////////// */}
        <Routes>
          <Route
            path="/"
            element={<Home name={{ page: "/// Home Page ///" }}></Home>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogg" element={<Blog></Blog>}></Route>
        </Routes>
        {/* ////////////////////////////////////////////////////// */}
      </Router>
      {/* navbar */}

      {/* //////////////////////////////////////////////////// */}
      {/* <Home name={{ page: "/// Home Page ///" }}></Home> */}
      {/* <Blog></Blog> */}
    </div>
  );
}

export default App;
