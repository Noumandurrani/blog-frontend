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
      {/* {id} */}
      <h2></h2>
      {/* <hr></hr> */}
      <div className="container" style={{ textAlign: "justify" }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div
              style={{ width: "" }}
              className=""
              //   key={idData.id}
            >
              <img
                style={{ width: "100%" }}
                src={"http://127.0.0.1:4000/" + idData.image}
              ></img>
              <br></br>
              <br></br>

              <div className="">
                <h2 className="fw-bolder">{idData.title}</h2>
                <p className="">{idData.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default BlogDetails;
