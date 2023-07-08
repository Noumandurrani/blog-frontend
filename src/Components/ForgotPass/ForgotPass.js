import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ForgotPass() {
  const [hash, setHash] = useState("");
  const [newPass, setNewPass] = useState();
  const [cnfrmPass, setCnfrmPass] = useState();
  const navgate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = urlParams.get("hash");
    setHash(hash);
  }, []);
  const handleNewPassSubmit = (e) => {
    axios
      .post("http://127.0.0.1:4000/api/project/forgot/Password", {
        new_password: newPass,
        confirm_password: cnfrmPass,
        hash: hash,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    // navgate("/login");
  };
  return (
    <div style={{ marginTop: "120px" }}>
      {hash ? (
        <div>
          <h2>Forgot Psss</h2>
          <h4>{hash}</h4>
          <form onSubmit={handleNewPassSubmit}>
            <div>
              <lable>newPassword</lable>
              <input
                type="password"
                value={newPass}
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <lable>ConfrmPassword</lable>
              <input
                type="password"
                value={cnfrmPass}
                onChange={(e) => {
                  setCnfrmPass(e.target.value);
                }}
              ></input>
            </div>
            <MDBBtn type="submit">reset password</MDBBtn>
          </form>
        </div>
      ) : (
        <p>Invalid reset Link</p>
      )}
    </div>
  );
}
export default ForgotPass;
