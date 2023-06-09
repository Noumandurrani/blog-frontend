import React, { useEffect, useState } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function ApprovedByAdmin() {
  const [show, setShow] = useState(true);
  const navgate = useNavigate();
  const { id } = useParams();
  const [change, setChange] = useState(false);

  const handleClose = () => {
    setShow(false);
    navgate("/superadmin");
  };

  //////post details for publish
  const [idData, setIdData] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/project/post-id/${id}`)
      .then((response) => {
        console.log(response);
        setIdData(response.data.data);
        setChange(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /////////////Approve post
  const handleApprove = (e) => {
    axios
      .get("http://127.0.0.1:4000/api/project/post/approved/" + id)
      .then((res) => {
        console.log(res.data);
        setChange(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* <h3>ApprovedByAdmin</h3> */}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{idData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: "100%" }}
            src={"http://127.0.0.1:4000/" + idData.image}
          ></img>
          <br></br>
          <br></br>

          <p>{idData.body}</p>
        </Modal.Body>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {change && (
            <Button variant="primary" onClick={handleApprove}>
              Approve
            </Button>
          )}
          {!change && <Button variant="dark">Approved</Button>}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ApprovedByAdmin;
