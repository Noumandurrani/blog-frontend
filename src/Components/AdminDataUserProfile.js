import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AdminDataUserProfile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/get-all")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ marginTop: 69, backgroundColor: "#00444c" }}>
      {/* <h3>AdminDataUserProfile</h3> */}

      <table
        className="table col-lg-10 border border-dark bg-light"
        style={{ marginTop: "12px" }}
      >
        <thead className="bg-dark text-light text-center">
          <tr>
            <th className="border text-light">User Name</th>
            <th className="border text-light">Profile View</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map(
            (item) =>
              item.role !== "admin" && (
                <tr key={item.id}>
                  <td className="border">{`${item.firstName} ${item.lastName}`}</td>
                  <td className="border">
                    <Link
                      to={`/viewuser/${item._id}`}
                      //   className="btn btn-warning bg-primary"
                      // onClick={handlePublish}
                    >
                      <abbr
                        title="view profile"
                        className="fa fa-solid fa-user text-decoration-none"
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
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDataUserProfile;
