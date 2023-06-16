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
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import BlogDetails from "./Components/BlogComp/BlogDetails";
import CreatePost from "./Components/CreatePost";
import UserDash from "./Components/UserDash";
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
            <Navbar.Collapse
              id="navvbar-navv"
              style={{ justifyContent: "end" }}
            >
              <Nav className="">
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
                <NavItem className="">
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
        {/* ///////////////////////////////////////////////////// */}
        <Routes>
          <Route
            path="/"
            element={<Home name={{ page: "/// Home Page ///" }}></Home>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogg" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/createpost" element={<CreatePost></CreatePost>}></Route>
          <Route path="/userdash" element={<UserDash></UserDash>}></Route>

          <Route
            path="/blogdetail/:id"
            element={<BlogDetails></BlogDetails>}
          ></Route>
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
