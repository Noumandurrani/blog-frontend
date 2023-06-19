import axios from "axios";
import React, { useEffect, useState } from "react";
// import OIP from "../Logos/OIP.jpeg";

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
function CreatePost() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  //   const [postData, setPostData] = useState({
  //     title: "",
  //     body: "",
  //     author: "",
  //     image: null,
  //     category: "",
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("data:" + postData.description + "////" + postData.title);
    // setPostData({
    //   title: title,
    //   body: body,
    //   author: author,
    //   image: image,
    //   category: category,
    // });
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("author", author);
    formData.append("image", image);
    formData.append("category", category);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("http://127.0.0.1:4000/api/project/post-upload", formData)
      .then((response) => {
        console.log("Posting Data", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ marginTop: 120 }}>
      <div className="container">
        <h1>Create Post</h1>
        <img src={image}></img>
        <form onSubmit={handleSubmit} method="post">
          <label>Title</label>
          <input
            className="form-control border-dark"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <br></br>
          <label>Image</label>
          <input
            className="form-control border-dark"
            type="file"
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          ></input>

          <br></br>
          <label>Author</label>
          <input
            className="form-control border-dark"
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          ></input>
          <br></br>
          <label>Description</label>
          <textarea
            className="form-control border-dark"
            value={body}
            type="text"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <br></br>
          <label>Category</label>
          <input
            className="form-control border-dark"
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className="btn btn-light border-dark"
            value="Submit"
            type="submit"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
