import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Profile() {
  const [userData, setUserData] = useState({});
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  // const headers = {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // }
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:4000/api/project/get-user/${localStorage.getItem(
          "userId"
        )}`
      )
      .then((res) => {
        console.log("userdata : ", res.data.userData);
        setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // set profile
  const [profile, setProfile] = useState();
  const handleSetProfile = (e) => {
    // e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    formData.append("profile", profile);
    axios
      .post(
        "http://127.0.0.1:4000/api/project/update/user/profile/" + userId,
        formData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  return (
    <div style={{}}>
      <h2>Profile</h2>
      {/* <h2>{localStorage.getItem("userId")}</h2> */}
      {/* <h4>{userData.email}</h4> */}
      {/* <h5>{userId}</h5> */}
      <img
        src={"http://127.0.0.1:4000/" + userData.profile} //"http://127.0.0.1:4000/" + userData.profile
        alt="dp"
        style={{ height: "150px", borderRadius: "100px", width: "150px" }}
      ></img>
      <form onSubmit={handleSetProfile}>
        <input
          type="file"
          name="profile"
          onChange={(e) => {
            setProfile(e.target.files[0]);
          }}
        ></input>
        <input
          className="btn btn-light border-dark"
          value="Save"
          type="submit"
        ></input>
      </form>

      <h2>{userData.firstName + " " + userData.lastName}</h2>
      {/* <h2>{userData._id}</h2> */}
      {/* <h2>{userData.email}</h2> */}
      {/* <h4>{userData.profile}</h4> */}
    </div>
  );
}

export default Profile;
