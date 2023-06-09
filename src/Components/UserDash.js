import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Post from "./UserDashComp/Post";
import Profile from "./UserDashComp/Profile";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function UserDash() {
  const [onPage, setOnPage] = useState(true);
  //   const [onPage, setOnPage] = useState(true);

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
    <>
      <div style={{ marginTop: 120 }}>
        <div className="container-fluid">
          <div className="row" style={{}}>
            <div
              className="col-lg-2 col-md-3, col-sm-5, col-5"
              style={{
                position: "fixed",
                paddingTop: "10px",
                backgroundColor: "black",
              }}
            >
              <h4>Dashboard</h4>
              <hr></hr>
              <div className="" style={{ height: "500px", width: "100%" }}>
                <div>
                  <div className="">
                    <h4
                      style={{
                        transition: "0.3s ease",
                        backgroundColor: "red",
                        lineHeight: "40px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "pink";
                        e.target.style.backgroundColor = "white";

                        // e.target.style.transition = "0.5s ease";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "black";
                        e.target.style.backgroundColor = "red";

                        // e.target.style.transition = "0.5s ease";
                      }}
                      //   onClick={}
                    >
                      Profile
                    </h4>
                    {/* <hr></hr> */}
                    <h4
                      style={{
                        transition: "0.3s ease",
                        backgroundColor: "red",
                        lineHeight: "40px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onPage == true) {
                          <Post></Post>;
                        } else {
                          onPage = false;
                        }
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "pink";
                        e.target.style.backgroundColor = "white";
                        // e.target.style.transition = "0.5s ease";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "black";
                        e.target.style.backgroundColor = "red";
                        // e.target.style.transition = "0.5s ease";
                      }}
                    >
                      Posts
                    </h4>
                    {/* <hr></hr> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-7, col-sm-7, col-7 bg-warning"
              style={{ position: "fixed", right: 312, paddingTop: "10px" }}
            >
              <div
                className="container"
                style={{ height: "550px", width: "100%" }}
              >
                <Link to="/createpost">
                  <Button>new Post</Button>
                </Link>
                <br></br>
                <br></br>

                <Link to="/offcanvas">
                  <Button>OffCanvas</Button>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4, col-sm-5, col-5 bg-dark"
              style={{ position: "absolute", right: 0, paddingTop: "10px" }}
            >
              <div
                className=""
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                {/* <Link to="/createpost">
                  <div style={{ color: "white" }}>My LatestPosts</div>
                </Link> */}
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
                  <Button className="btn bg-dark">See more</Button>
                </div>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserDash;
