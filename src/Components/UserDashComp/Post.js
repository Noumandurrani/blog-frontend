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

  return (
    <div style={{ marginTop: "15px" }}>
      {/* <h2>Posts</h2> */}
      {/* <h2>{userId}</h2> */}
      <div className="text-end mx-3">
        <Link to="/offcanvas/createpost" className=" btn btn-primary">
          New Post
        </Link>
      </div>
      <div className="container">
        {postTable == "" ? (
          <h4 className="mt-3 text-danger">No Post details</h4>
        ) : (
          <table
            className="col-lg-12 col-md-12 col-sm-12 col-12 table border border-2 border-dark bg-light mt-3"
            style={{ boxShadow: "2px 2px 3px #565656" }}
          >
            <thead className="thead-dark">
              <tr className="">
                <th className="col-lg-4 col-md-4 col-sm-4 col-4 px-3 text-start">
                  Post Title
                </th>
                <th className="col-lg-2 col-md-2 col-sm-2 col-2">
                  is Approved
                </th>
                <th className="col-lg-2 col-md-2 col-sm-2 col-2">is Publish</th>
                <th className="col-lg-2 col-md-2 col-sm-2 col-2">edit Post</th>
                <th className="col-lg-2 col-md-2 col-sm-2 col-2">del Post</th>
              </tr>
            </thead>
            <tbody>
              {ltstPostUp.map((item) => (
                <tr key={item.id}>
                  <td className="col-lg-2 col-md-2 col-sm-2 col-2 px-3 text-start">
                    {item.title}
                  </td>
                  <td className="col-lg-2 col-md-2 col-sm-2 col-2">
                    {item.is_approvedByAdmin ? "Ok" : "Pending"}
                  </td>
                  <td className="col-lg-2 col-md-2 col-sm-2 col-2">
                    {item.is_pubish ? (
                      <Link
                        to={`/unpublish/${item._id}`}
                        className="btn btn-warning bg-warning"
                        style={{ width: 120 }}
                      >
                        UnPublish
                      </Link>
                    ) : (
                      <Link
                        // key={item.id}
                        to={`/publish/${item._id}`}
                        className="btn btn-warning bg-primary"
                        // onClick={handlePublish}
                        style={{ width: 120 }}
                      >
                        Publish
                      </Link>
                    )}
                  </td>
                  <td className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <Link to={`/postupdate/${item._id}`}>
                      <i class="fa fa-edit fs-4 fw-bold text-primary"></i>
                    </Link>
                  </td>
                  <td className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <Link to={`/delpost/${item._id}`}>
                      {" "}
                      <i class="fa fa-solid fa-trash fa-bounce fs-4 text-danger"></i>
                    </Link>
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
