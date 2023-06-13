import axios from "axios";
import React, { useEffect, useState } from "react";
import OIP from "../Logos/OIP.jpeg";
import { Link, useParams } from "react-router-dom";
function BlogDetails() {
  const { id } = useParams();
  console.log(id);
  const [idData, setIdData] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/project/post-id/${id}`)
      .then((response) => {
        console.log(response);
        setIdData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  ///////////
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
        The Blog Details
      </h3>
      {id}
      <h2></h2>
      {/* <hr></hr> */}
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4">
            <div
              style={{ width: "" }}
              className="card mb-5 border-success"
              //   key={idData.id}
            >
              <img src={OIP}></img>
              <div className="card-body">
                <h5 className="card-title p-3">{idData.title}</h5>
                <p className="card-text">{idData.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
