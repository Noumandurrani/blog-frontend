import axios from "axios";
import React, { useEffect, useState } from "react";
import OIP from "./Logos/OIP.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "react-fontawesome";
import { Dropdown, Popover } from "react-bootstrap";
import Popup from "./BlogComp/Popup";
function Blog() {
  const [data, setData] = useState([]);
  // const [id, setId] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/post-all")
      .then((response) => {
        // console.log(response);
        setData(response.data.data);
        console.log(response.data.data);
        // data.map((item) => {
        //   setId(item.user_id);
        //   console.log(item.user_id);
        //   console.log(id);
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const stringBody = data.body.length;

  /////
  //get user dp for cards (author)
  // const [getDp, setGetDp] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:4000/api/project/get-user/" + id)
  //     .then((response) => {
  //       console.log(response.data.userData);
  //       // setGetDp(response.data.userData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
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
        The Blog
      </h3>
      <br></br>
      {/* <br></br> */}
      {/* <hr></hr> */}
      <div className="container text-start">
        <div className="row">
          {data.map((item) =>
            item.is_pubish === true ? (
              <div className="col-lg-4">
                {item.is_pubish === true ? (
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
                      {/* <img
                        // key={getDp.id}
                        src={"http://127.0.0.1:4000/" + getDp.profile}
                        alt="dp"
                        style={{
                          width: "40px",
                          boxShadow: "2px 2px 2px gray, -2px -2px 2px gray",
                          borderRadius: "20px",
                        }}
                      ></img> */}
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
                            <i class="fa-solid fa-list"></i>
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
                ) : (
                  "not publish"
                )}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Get() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Get</h1>

//         {data.map((item) => (
//           <div className="row justify-content-center">
//             <div className="col-lg-5">
//               <div className="card mb-5 border-success" key={item.id}>
//                 <div className="card-title p-3">
//                   <h5>{item.title}</h5>
//                 </div>
//                 <div className="card-body">
//                   <p>{item.body}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Get;
