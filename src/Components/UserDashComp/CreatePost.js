import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import OIP from "../Logos/OIP.jpeg";

function CreatePost() {
  const navgate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [showCategory, setShowCategory] = useState([]);
  const userId = localStorage.getItem("userId");
  const handleOther = (e) => {
    setCategory("other");
    setOtherValue(e.target.value);
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/get/category")
      .then((res) => {
        console.log(res.data.data);
        setShowCategory(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleSubmit = (event) => {
    // event.preventDefault();
    const newCategory = category === "other" ? otherValue : category;
    /////////
    axios
      .post("http://127.0.0.1:4000/api/project/store/category", {
        categoryName: newCategory,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    /////////
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("author", author);
    formData.append("image", image);
    formData.append("category", newCategory);
    formData.append("user_id", userId);

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
    navgate("/offcanvas");
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
          {/* /////////////////category */}
          <label>Category</label>
          <select
            className="form-control border-dark"
            // type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {/* <option value="cars">cars</option> */}
            {/* <option value="travelling">travelling</option> */}
            <option>select an option</option>
            {showCategory.map((item) => (
              <option key={item.id}>{item.categoryName}</option>
            ))}
            <option className="bg-secondary" value="other">
              Others
            </option>
          </select>
          {category === "other" && (
            <input
              className="form-control mt-2"
              placeholder="write your own category"
              type="text"
              value={otherValue}
              onChange={handleOther}
            ></input>
          )}
          {/* /////////////////////// */}
          <br></br>
          <input
            className="btn btn-light border border-dark"
            value="Submit"
            type="submit"
          ></input>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CreatePost;
