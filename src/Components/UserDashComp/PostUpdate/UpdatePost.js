import axios from "axios";
import React from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

function UpdatePost() {
  const [show, setShow] = useState(true);
  const [detail, setDetail] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { id } = useParams();
  const navgate = useNavigate();
  const [change, setChange] = useState(false);
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:4000/api/project/post-id/" + id
        );
        console.log(response.data.data.body);
        setDetail(response.data.data);
        const body = response.data.data.body;
        if (body) {
          const contentState = ContentState.createFromText(body);
          const newEditorState = EditorState.createWithContent(contentState);
          setEditorState(newEditorState);
        }
        // const contentState = convertFromRaw(response.data.data.body);
        // console.log("content-state: ", contentState);
        // if (contentState) {
        //   const newEditorState = EditorState.createWithContent(contentState);
        //   setEditorState(newEditorState);
        // } else {
        //   console.error("invalid content state recieved.");
        // }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostData();
  }, []);
  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    setChange(true);
  };
  const submitUpdatedContent = async () => {
    try {
      const content = editorState.getCurrentContent().getPlainText();
      const updatedData = {
        body: content,
      };
      await axios.post(
        "http://127.0.0.1:4000/api/project/post/update/" + id,
        updatedData
      );
      setChange(false);
      // navgate("/blogdetail");
    } catch (error) {
      console.error(error);
    }
  };
  //////////////////////////
  // const [show, setShow] = useState(true);
  // const navgate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navgate("/offcanvas");
  };
  // const [idData, setIdData] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:4000/api/project/post-id/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       setIdData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // const handleUpdatePost = (e) => {
  //   axios
  //     .post("http://127.0.0.1:4000/api/project/post/update/" + id)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div style={{ marginTop: 120 }}>
      {/* <h3>update post</h3> */}
      {/* <Editor editorState={editorState} onChange={handleEditorChange}></Editor> */}
      {/* <MDBBtn onClick={submitUpdatedContent}>Update Post</MDBBtn> */}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            Title: {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img
            style={{ width: "100%" }}
            src={"http://127.0.0.1:4000/" + idData.image}
          ></img> */}
          <Editor
            editorState={editorState}
            onChange={handleEditorChange}
          ></Editor>
          <br></br>
          <br></br>
          <h6 className="text-danger text-end">Author: {detail.author}</h6>

          {/* <p>{idData.body}</p> */}
        </Modal.Body>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {change && (
            <MDBBtn onClick={submitUpdatedContent}>Update Post</MDBBtn>
          )}
          {!change && <button className="btn btn-dark">Updated</button>}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UpdatePost;
