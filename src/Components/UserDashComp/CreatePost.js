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
  const [imagePreview, setImagePreview] = useState(null);
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
    <div style={{ marginTop: 140 }}>
      <div className="container">
        <h3 className="">Create Post</h3>

        <form onSubmit={handleSubmit} method="post">
          <label
            style={{
              backgroundColor: "black",
              padding: "2px 100px 2px 100px",
              color: "white",
            }}
          >
            Title
          </label>
          <input
            placeholder="post title"
            className="form-control border"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ backgroundColor: "#e5e5e5" }}
          ></input>
          <br></br>
          <label
            style={{
              backgroundColor: "black",
              padding: "2px 77px 2px 77px",
              color: "white",
            }}
          >
            Post Image
          </label>
          <div
            className="rounded border text-center"
            style={{ height: "339px", backgroundColor: "#e5e5e5" }}
          >
            {imagePreview && (
              <img
                src={imagePreview}
                alt="uploaded image"
                style={{
                  maxWidth: "600px",
                  position: "relative",
                  height: "337px",
                }}
              ></img>
            )}
            <label
              style={{
                position: "absolute",
                zIndex: 100,
                left: "391px",
                bottom: "10px",
              }}
            >
              <i
                className="border border-light mx-2 rounded text-light opacity-75"
                style={{
                  // width: "400px",
                  padding: "10px 176px 10px 176px",
                  backgroundColor: "#000000",
                  cursor: "pointer",
                }}
              >
                Upload image
              </i>
              <input
                className="form-control  d-none"
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  const filee = e.target.files[0];
                  if (filee) {
                    const imageReader = new FileReader();
                    imageReader.onloadend = () => {
                      setImagePreview(imageReader.result);
                    };
                    imageReader.readAsDataURL(filee);
                  }
                }}
              ></input>
            </label>
          </div>

          <br></br>
          <label
            style={{
              backgroundColor: "black",
              padding: "2px 94px 2px 94px",
              color: "white",
            }}
          >
            Author
          </label>
          <input
            style={{ backgroundColor: "#e5e5e5" }}
            placeholder="author name"
            className="form-control "
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          ></input>
          <br></br>
          <label
            style={{
              backgroundColor: "black",
              padding: "2px 79px 2px 79px",
              color: "white",
            }}
          >
            Description
          </label>
          <textarea
            style={{ backgroundColor: "#e5e5e5" }}
            placeholder="add content here"
            className="form-control "
            value={body}
            type="text"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <br></br>
          {/* /////////////////category */}
          <label
            style={{
              backgroundColor: "black",
              padding: "2px 87px 2px 87px",
              color: "white",
            }}
          >
            Category
          </label>
          <select
            style={{ backgroundColor: "#e5e5e5" }}
            className="form-control"
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
              className="form-control mt-2 text-lowercase"
              placeholder="write your own category, use lowercase letters"
              type="text"
              value={otherValue}
              onChange={handleOther}
            ></input>
          )}
          {/* /////////////////////// */}
          <br></br>
          <input
            className="btn btn-secondary border border-secondary"
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
