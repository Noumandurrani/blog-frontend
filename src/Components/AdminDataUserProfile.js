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
    <div style={{ marginTop: 69 }}>
      <h3>AdminDataUserProfile</h3>
      <table className="col-lg-10 border border-dark">
        <thead className="bg-dark text-light text-center">
          <tr>
            <th className="border">User Name</th>
            <th className="border">Profile View</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((item) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDataUserProfile;
