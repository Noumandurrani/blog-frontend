import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post(props) {
  const [postTable, setPostTable] = useState([]);
  const userId = localStorage.getItem("userId");
  // console.log(props.postPropId);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:4000/api/project/user/posts", { user_id: userId })
      .then((response) => {
        console.log(response.data.data);
        setPostTable(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const ltstPostUp = postTable.reverse();
  /////////////publish post

  console.log("post:", props.postPropId);
  const handlePublish = (e) => {
    // e.preventDefault();
    axios
      .get("http://127.0.0.1:4000/api/project/publish/post/" + props.postPropId)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /////////////
  return (
    <div style={{}}>
      <h2>Post</h2>
      {/* <h2>{userId}</h2> */}
      <div className=" ">
        <Link to="/offcanvas/createpost" className="btn btn-primary">
          New Post
        </Link>
      </div>
      <div className="container">
        {postTable == "" ? (
          <h4 className="mt-3 text-danger">No Post details</h4>
        ) : (
          <table
            className="table border border-3 border-danger bg-light mt-3"
            style={{ boxShadow: "2px 3px 6px #565656" }}
          >
            <thead className="thead-dark">
              <tr className="">
                <th className="col-lg-5 px-3 text-start">Post Title</th>
                <th className="col-lg-3">isApproved</th>
                <th className="col-lg-3">isPublish</th>
              </tr>
            </thead>
            <tbody>
              {ltstPostUp.map((item) => (
                <tr key={item.id}>
                  <td className="col-lg-5 px-3 text-start">{item.title}</td>
                  <td className="col-lg-3">
                    {item.is_approvedByAdmin ? "Ok" : "No"}
                  </td>
                  <td className="col-lg-3">
                    {item.is_pubish ? (
                      "Yes"
                    ) : (
                      <Link
                        // key={item.id}
                        to={`/offcanvas/${item._id}`}
                        className="btn btn-warning bg-primary"
                        onClick={handlePublish}
                      >
                        Publish
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Post;
// {/* <input className="form-check" type="checkbox"></input> */}
