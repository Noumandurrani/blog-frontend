import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div style={{}}>
      <h2>Post</h2>
      <Link to="/offcanvas/createpost" className="btn btn-primary">
        New Post
      </Link>
    </div>
  );
}

export default Post;
