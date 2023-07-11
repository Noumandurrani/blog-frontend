import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dp({ showPopupProfile, setShowPopupProfile }) {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({});
  const navgate = useNavigate();
  const [change, setChange] = useState(false);

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
  ///////////
  const handleClose = () => {
    setShowPopupProfile(false);
  };
  //////////
  const handleSaveBtn = () => {
    setChange(true);
  };
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
    // setChange(true);
  };
  return (
    <Modal show={showPopupProfile} onHide={handleClose} className="popup">
      <Modal.Header closeButton>
        <Modal.Title>Profile photo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={"http://127.0.0.1:4000/" + userData.profile} //"http://127.0.0.1:4000/" + userData.profile
          alt="dp"
          style={{
            height: "180px",
            borderRadius: "100px",
            width: "180px",
            marginBottom: "20px",
            // boxShadow: "5px 5px 5px black",
          }}
          className="border border-light border-4"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <form onChange={handleSaveBtn} onSubmit={handleSetProfile}>
          <label>
            <i className="btn btn-primary mx-2">Upload photo</i>
            <input
              name="profile"
              type="file"
              onChange={(e) => {
                setProfile(e.target.files[0]);
              }}
              className="d-none"
            ></input>
          </label>
          {change && (
            <input
              className="btn btn-success"
              type="Submit"
              value="save"
            ></input>
          )}
        </form>
      </Modal.Footer>
    </Modal>
  );
}

export default Dp;
