import React, { useEffect, useState } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function ViewPost() {
  const [show, setShow] = useState(true);
  const navgate = useNavigate();
  const { id } = useParams();
  const [change, setChange] = useState(false);
  const handleClose = () => {
    setShow(false);
    navgate("/superadmin");
  };
  //////post view
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
  return (
    <div>
      <h4>ViewPost</h4>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{idData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {/* <h4>{idData.author}</h4> */}
          <img
            className="border border-secondary border-3"
            style={{ width: "50%", borderRadius: "5px", height: 400 }}
            src={"http://127.0.0.1:4000/" + idData.image}
          ></img>
          <br></br>
          <br></br>

          <p className=" mx-4" style={{ textAlign: "between" }}>
            {idData.body}
          </p>
          <h6 className="text-danger" style={{ textAlign: "" }}>
            Author : {idData.author}
          </h6>
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

export default ViewPost;
