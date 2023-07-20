import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Popover } from "react-bootstrap";
import OIP from "../Logos/OIP.jpeg";
import car from "../Logos/car.jpg";

function LatestPost() {
  const [LatestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/post-all")
      .then((response) => {
        console.log(response);
        setLatestPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const slctCrd = LatestPosts.slice(-3);
  const rvrsArr = slctCrd.reverse();
  return (
    <div className="container text-start">
      <div className="row">
        {rvrsArr.map((item) =>
          item.is_approvedByAdmin === true ? (
            item.is_pubish === true ? (
              // item.is_publish === true ? () : ("")
              <div
                className="col-lg-4"
                // onMouseOver={(e) => {
                //   e.target.style.boxShadow = "10px 10px 10px gray";
                // }}
              >
                <div
                  style={{ width: "", boxShadow: "5px 5px 5px gray" }}
                  className="card mb-5 border-success"
                  key={item.id}
                >
                  <img
                    className="card-img-top"
                    src={"http://127.0.0.1:4000/" + item.image}
                    alt="image api"
                    style={{ height: "280px" }}
                  />
                  <div
                    className="card-header"
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`/blogdetail/${item._id}`}
                      className="d-flex justify-content-end text-decoration-none"
                    >
                      <div className="btn btn-dark border-dark">
                        See details
                      </div>
                    </Link>
                  </div>
                  {/* <hr></hr> */}
                </div>
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
  );
}

export default LatestPost;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// function Blog() {
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
//     <div className="text-center">
//       <h3 className="pt-5 pb-5 bg-info">------------BLOGGGG----------</h3>

//       {/* //// */}
//       <div className="row">
//         {data.map((item) => (
//           <div className="col-lg-4">
//             <div className="card mb-5 border-success" key={item.id}>
//               <div className="card-title p-3">
//                 <h5>{item.title}</h5>
//               </div>
//               <div className="card-body">
//                 <p>{item.body}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;
