import React, { useEffect, useState } from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Publish() {
  const [show, setShow] = useState(true);
  const navgate = useNavigate();
  const { id } = useParams();

  const handleClose = () => {
    setShow(false);
    navgate("/offcanvas");
  };

  //////post details for publish
  const [idData, setIdData] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/project/post-id/${id}`)
      .then((response) => {
        console.log(response);
        setIdData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /////////////publish post
  const handlePublish = (e) => {
    // e.preventDefault();
    // const [postPub, setPostPub] = useState();
    //   const fetchPostPub = async () => {
    //     try {
    //       const res = await axios.get(
    //         "http://127.0.0.1:4000/api/project/publish/post/" + id
    //       );
    //       //   setPostPub(res.data.data);
    //     } catch (err) {
    //       console.log("error:", err);
    //     }
    //   };
    axios
      .get("http://127.0.0.1:4000/api/project/publish/post/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   useEffect(() => {
  //     fetchPostPub();
  //   }, []);
  /////////////
  return (
    <div>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{idData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>{idData.author}</h4> */}
          <img
            style={{ width: "100%" }}
            src={"http://127.0.0.1:4000/" + idData.image}
          ></img>
          <p>{idData.body}</p>
        </Modal.Body>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handlePublish}>
            Publish
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Publish;
