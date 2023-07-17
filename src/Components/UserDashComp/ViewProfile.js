import React, { useEffect, useState } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewProfile() {
  const [show, setShow] = useState(true);
  const navgate = useNavigate();
  const { id } = useParams();
  const [change, setChange] = useState(false);

  const handleClose = () => {
    setShow(false);
    navgate("/superadmin");
  };

  //////user profile details
  const [idData, setIdData] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/project/get-user/${id}`)
      .then((response) => {
        console.log(response);
        setIdData(response.data.userData);
        setChange(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* <h4>ViewProfile</h4> */}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{`${idData.firstName} ${idData.lastName}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            style={{ width: "350px", height: "350px" }}
            src={"http://127.0.0.1:4000/" + idData.profile}
          ></img>
          <br></br>
          <br></br>

          <p>{idData.email}</p>
        </Modal.Body>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewProfile;
