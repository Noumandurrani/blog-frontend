import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import { Nav, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";
function App() {
  return (
    <div className="">
      <h1>-------------Blogging Site---------------</h1>
      {/* navbar */}
      <Router>
        <Navbar bg="warning" expand="lg md">
          <div className="container">
            <Navbar.Brand href="#">Blog Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navvbar-navv"></Navbar.Toggle>
            <Navbar.Collapse
              id="navvbar-navv"
              style={{ justifyContent: "end" }}
            >
              <Nav className="">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <NavDropdown title="Category" id="navv-dropdown">
                  <NavDropdown.Item>
                    <Link to="/about" className="nav-link">
                      A-Category
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/about" className="nav-link">
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
        </Routes>
        {/* ////////////////////////////////////////////////////// */}
      </Router>
      {/* navbar */}

      {/* //////////////////////////////////////////////////// */}
      {/* <Home name={{ page: "/// Home Page ///" }}></Home> */}
    </div>
  );
}

export default App;
