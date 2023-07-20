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
// import { userInjured } from "fontawesome";

function OffCanvas() {
  const navgate = useNavigate();
  // localStorage.setItem("postIdPub", id);
  // console.log("offcanvas: ", id);
  // const handleLogout = (e) => {
  //   localStorage.clear();
  //   localStorage.setItem("isloggedIn", false);
  //   navgate("/");
  // };
  const [profilee, setProfilee] = useState(false);
  const [poste, setPoste] = useState(true);
  const userId = localStorage.getItem("userId");
  // const [userid, setUserId] = useState(userId);
  //////////////user data api
  // const [userData, setUserData] = useState({})
  // useEffect(()=>{
  //   axios.get("")
  // })
  /////////////get data api by user id
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:4000/api/project/user/posts", { user_id: userId })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const slicePost = data.slice(-2);
  const ltstPost = slicePost.reverse();

  ///get user dp for cards (author)
  const [getDp, setGetDp] = useState({});
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/get-user/" + userId)
      .then((response) => {
        console.log(response.data.userData);
        setGetDp(response.data.userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ marginTop: 120, overflow: "hidden" }}>
      <Navbar
        expand="lg"
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
              <OffcanvasTitle>User Dashboard</OffcanvasTitle>
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
                    setProfilee(true);
                    setPoste(false);
                  }}
                  style={{
                    color: "white",
                  }}
                  className="fw-bold"
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => {
                    setProfilee(false);
                    setPoste(true);
                  }}
                  className="fw-bold"
                  style={{
                    color: "white",
                  }}
                >
                  Posts
                </Nav.Link>
              </Nav>
            </OffcanvasBody>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div
        className="container-fluid "
        style={{
          marginTop: "9px",
          paddingTop: "45px",
          backgroundColor: "#05121b",
          color: "white",
        }}
      >
        <div className="row">
          <div
            className="col-lg-8 col-md-8 col-sm-12 col-12"
            style={{
              paddingTop: "15px",
              // position: "relative",
              backgroundColor: "#05121b",
              height: "100%",
              textAlign: "center",
            }}
          >
            {profilee && <Profile></Profile>}
            {poste && <Post></Post>}
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12 text-light"
            style={{
              paddingTop: "10px",
              backgroundColor: "#0f2132",
              border: "red",
              boxShadow: "0px 2px 10px black",
            }}
          >
            <h2
              className="text-dark py-2 position-fixed"
              style={{
                marginLeft: "-12px",
                marginRight: "-12px",
                marginTop: "-2px",
                paddingLeft: "12px",
                paddingRight: "6px",
                backgroundColor: "white",
                right: "14px",
                zIndex: 200,

                boxShadow: "0px 3px 3px black",
              }}
            >
              Latest Posts
            </h2>
            <div className="row">
              {ltstPost.map((item) => (
                <div
                  className="col-lg-12 col-12 col-md-12 col-sm-12"
                  style={{}}
                >
                  <div
                    style={{
                      width: "",
                      boxShadow: "5px 5px 5px black, -3px -3px 3px black",
                      marginTop: "70px",
                    }}
                    className="card mb-5 border-success"
                    key={item.id}
                  >
                    <img
                      className="card-img-top"
                      src={"http://127.0.0.1:4000/" + item.image}
                      alt="loading image"
                      style={{ height: "280px" }}
                    ></img>
                    <div
                      className="card-header"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={"http://127.0.0.1:4000/" + getDp.profile}
                        alt="dp"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "20px",
                        }}
                        className="border border-dark border-3"
                      ></img>
                      <p className="">{item.author}</p>

                      <Dropdown
                        className=""
                        style={{ borderLeft: "1px solid black" }}
                      >
                        <Dropdown.Toggle
                          className="text-dark drop-tgl"
                          id="sharePost"
                          style={{
                            boxShadow: "none",
                            backgroundColor: "white",
                          }}
                        >
                          <i className="bi bi-three-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{
                            boxShadow: "2px 2px 2px gray",
                            placeItems: "end",
                          }}
                        >
                          <Dropdown.Item className="d-flex flex-row justify-content-between">
                            <i className="bi bi-share-fill"></i>
                            <div className="">Share Post</div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card-body overflow-none">
                      <h5 className="card-title fw-bolder">{item.title}</h5>
                      <p className="card-text">
                        {item.body.substring(0, 35)} . . . .
                      </p>
                      <Link
                        to={`/blogdetail/${item._id}`}
                        className="d-flex justify-content-end text-decoration-none"
                      >
                        <MDBBtn className="btn-dark">See details</MDBBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {data == "" ? (
                <h4 className="text-danger">No Posts</h4>
              ) : (
                <MDBBtn
                  className="btn bg-light fw-bold fs-5 text-black"
                  style={{
                    width: "100%",
                    padding: "10px",
                    // boxShadow: "2px 2px 2px gray, -2px -2px 2px ",
                  }}
                >
                  See more
                </MDBBtn>
              )}
            </div>

            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
// "http://127.0.0.1:4000/" + item.image
