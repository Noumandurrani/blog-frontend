import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AdminDataUserPost() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/post-all")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ marginTop: 69 }}>
      {/* <h3>AdminDataUserPost</h3> */}
      <table className="col-lg-10 border border-dark">
        <thead className="bg-dark text-light text-center">
          <tr>
            <th className="border">Post title</th>
            <th className="border">Publish</th>
            <th className="border">Approved</th>
            <th className="border">Author</th>
            <th className="border">Post View</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border">{item.title}</td>
              <td className="border">
                {item.is_pubish === true ? "Yes" : "No"}
              </td>
              <td className="border">
                {item.is_approvedByAdmin === true ? (
                  //   <button className="btn btn-primary">Approved</button>
                  "Approved"
                ) : (
                  <Link
                    to={`/approve/${item._id}`}
                    className="btn btn-warning bg-primary"
                    // onClick={handlePublish}
                  >
                    Approve
                  </Link>
                )}
              </td>
              <td className="border">{item.author}</td>
              <td className="border">
                <Link
                  to={`/viewpost/${item._id}`}
                  //   className="btn btn-warning bg-primary"
                  // onClick={handlePublish}
                >
                  <abbr
                    title="view"
                    className="fa fa-solid fa-book text-decoration-none"
                    style={{
                      boxShadow: "none",
                      fontSize: "22px",
                      cursor: "pointer",
                      transition: "0.3s ease",
                      transform: "scale(1.0)",
                    }}
                    onMouseOver={(e) => {
                      //   e.target.style.boxShadow = "1px 2px 2px gray"
                      //   e.target.style.fontSize = "19px";
                      e.target.style.transform = "scale(1.2)";
                      //   e.target.style.transition = "2s ease";
                    }}
                    onMouseOut={(e) => {
                      //   e.target.style.boxShadow = "none";
                      e.target.style.transform = "scale(1.0)";
                    }}
                  ></abbr>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDataUserPost;
