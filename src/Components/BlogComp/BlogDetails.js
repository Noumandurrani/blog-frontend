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
    <div style={{ marginTop: 120, marginBottom: 10 }}>
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
      {/* <hr></hr> */}
      <div className="container" style={{ textAlign: "justify" }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <div
              style={{ width: "" }}
              className="mt-3"
              //   key={idData.id}
            >
              <img
                style={{ width: "100%" }}
                src={"http://127.0.0.1:4000/" + idData.image}
              ></img>
              <br></br>
              <br></br>
              <br></br>

              <div className="">
                <h2 className="fw-bolder">{idData.title}</h2>

                <p className="">{idData.body}</p>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-around">
                  {localStorage.getItem("isloggedIn") &&
                  idData.is_approvedByAdmin === true ? (
                    <h5
                      className="text-light bg-secondary rounded text-end pt-2 pb-2 px-4"
                      style={{ backgroundColor: "black" }}
                    >
                      Approved
                    </h5>
                  ) : (
                    localStorage.getItem("isloggedIn") && (
                      <h5 className="text-light bg-primary rounded text-end pt-2 pb-2 px-4">
                        Pending
                      </h5>
                    )
                  )}
                  <h5 className="text-danger d-flex text-end  pt-2 pb-2 px-4">
                    Author: {idData.author}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default BlogDetails;
