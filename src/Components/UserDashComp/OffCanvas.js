import React from "react";
import Profile from "./Profile";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Button } from "react-bootstrap";
import {
  Container,
  Nav,
  Navbar,
  OffcanvasHeader,
  Offcanvas,
  OffcanvasTitle,
  OffcanvasBody,
  Card,
  CardImg,
} from "react-bootstrap";
// import { Offcanvas } from "react-bootstrap/Offcanvas";
import { Routes, Route, Link } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";

function OffCanvas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/post-all")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const slicePost = data.slice(-3);
  const ltstPost = slicePost.reverse();
  return (
    <div style={{ marginTop: 120 }}>
      {/* <div>OffCanvas</div> */}
      <Navbar
        expand=""
        bg="black"
        className="justify-content-center"
        style={{ position: "fixed", right: 0, left: 0 }}
      >
        <Container fluid className="justify-content-start">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="off-convass"
            className="text-dark bg-warning"
          >
            Menu
          </Navbar.Toggle>
          <Navbar.Offcanvas id={"off-convass"} placement="start">
            <OffcanvasHeader closeButton>
              <OffcanvasTitle>User Dashboard</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <Nav>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/post" className="nav-link">
                  Post
                </Link>
              </Nav>
            </OffcanvasBody>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div
        className="container-fluid bg-primary"
        style={{ marginTop: "0px", paddingTop: "45px" }}
      >
        <div className="row">
          <div className="col-lg-8 bg-warning" style={{ paddingTop: "10px" }}>
            <h2>Posts # profile</h2>
          </div>
          <div
            className="col-lg-4 bg-black text-light"
            style={{ paddingTop: "10px" }}
          >
            <h2 className="text-light">Latest Posts</h2>
            <div className="row">
              {ltstPost.map((item) => (
                <div className="col-lg-12 col-12 col-md-12 col-sm-12">
                  <div
                    style={{ width: "" }}
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
                      <p className="">{item.author}</p>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="primary"
                          className=" bg-light text-dark border-0 d-toggle-none"
                          id="sharePost"
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
                            <div
                              className=""
                              // style={{ marginLeft: "15px", marginTop: "2px" }}
                            >
                              Share Post
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card-body overflow-none">
                      <h5 className="card-title fw-bolder">{item.title}</h5>
                      <p className="card-text">
                        {item.body.substring(0, 25)} ....
                      </p>
                      <Link
                        to={`/blogdetail/${item._id}`}
                        className="d-flex justify-content-end text-decoration-none"
                      >
                        <div className="btn btn-light border-dark">
                          See details
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="btn bg-warning fw-bold fs-5 text-black"
              style={{ width: "100%", padding: "10px" }}
            >
              See more
            </Button>
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
