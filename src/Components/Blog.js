import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import OIP from "./Logos/OIP.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "react-fontawesome";
import { Dropdown, Popover } from "react-bootstrap";
import Popup from "./BlogComp/Popup";
function Blog() {
  const navgate = useNavigate();
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState({});
  const { category } = useParams();
  const [byCateg, setByCateg] = useState([]);
  console.log(category);
  ///////////////////////////////////////////////////////////////////////////
  const fetchAllPosts = async () => {
    try {
      if (category == "all") {
        console.log("aaaaaa : ", category);
        const res = await axios.get(
          "http://127.0.0.1:4000/api/project/post-all"
        );
        setData(res.data.data);
        console.log(res.data.data);
      } else {
        console.log("bbbbbb : ", category);
        // setData([0]);
        const res = await axios.post(
          `http://127.0.0.1:4000/api/project/get/post/category`,
          {
            category: category,
          }
        );
        setData(res.data.data);
        console.log(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);
  /////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (category === all) {
  //     axios
  //       .get("http://127.0.0.1:4000/api/project/post-all")
  //       .then((response) => {
  //         // console.log(response);
  //         setData(response.data.data);
  //         console.log(response.data);
  //         // data.map((item, index) => {
  //         // setId(item.user_id);
  //         // console.log(item.user_id);
  //         // setUserId(item.user_id);
  //         // console.log(userId);
  //         // }
  //         // );
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     axios
  //       .post(`http://127.0.0.1:4000/api/project/get/post/category`, {
  //         category: category,
  //       })
  //       .then((res) => {
  //         console.log(res.data.data);
  //         setByCateg(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // }, []);
  ///////////////////////////////////////////////////////////////////////////
  // useEffect(() => {

  // }, []);
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
            item.is_approvedByAdmin === true ? (
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
                        <Link to={`/viewuser/${item.user_id}`}>
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
                        </Link>

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
                          <div className="btn btn-dark border-dark">
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
