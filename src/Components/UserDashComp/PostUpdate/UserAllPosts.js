import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import OIP from "./Logos/OIP.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "react-fontawesome";
import { Dropdown, Popover } from "react-bootstrap";
// import Popup from "./BlogComp/Popup";

function UserAllPosts() {
  const navgate = useNavigate();
  const [data, setData] = useState([]);
  const { userid } = useParams();
  console.log(userid);
  ///////////////////////////////////////////////////////////////////////////
  const fetchAllPosts = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:4000/api/project/user/posts",
        { user_id: userid }
      );
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  //   fetchAllPosts();
  useEffect(() => {
    fetchAllPosts();
  }, []);
  /////////////////////////////////////////////////////////////////////////
  return (
    <div style={{ marginTop: 120 }}>
      <h3
        className=" text-center"
        style={{
          backgroundColor: "#dfbfb1",
          fontSize: "70px",
          height: 180,
          paddingTop: "40px",
          fontWeight: "bolder",
        }}
      >
        The User Blogs
      </h3>
      <div className="container text-start mt-4">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4">
              <div
                style={{ width: "" }}
                className="card mb-5 border-success "
                key={item.id}
              >
                <img
                  className="card-img-top "
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
                  {/* <Link to={`/viewuser/${item.user_id}`}> */}
                  <img
                    // key={getDp.id}
                    src={"http://127.0.0.1:4000/" + item.user_dp}
                    alt="dp"
                    style={{
                      width: "40px",
                      height: "40px",
                      // boxShadow: "2px 2px 2px gray, -2px -2px 2px gray",
                      borderRadius: "20px",
                    }}
                    className="border border-dark border-3"
                  ></img>
                  {/* </Link> */}

                  {/* <p className="">{item.author}</p> */}
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
                    <div className="btn btn-dark border-dark">See details</div>
                  </Link>
                </div>
                {/* <div className="card-footer"> */}
                {/* <Link
                to={`/blogdetail/${item._id}`}
                className="d-flex justify-content-end text-decoration-none"
              >
                <div className="btn btn-light border-dark">Read more</div>
              </Link> */}
                {/* </div> */}
                {/* <hr></hr> */}
              </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserAllPosts;
