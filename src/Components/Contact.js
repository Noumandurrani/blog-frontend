import React, { useEffect } from "react";

function Contact() {
  return (
    <div className="container" style={{ marginTop: 120 }}>
      <h2>Contact</h2>
      <div className="col-lg-4 px-2  pb-2 border border-light ">
        <form className="mt-4">
          <div className=" mb-4">
            <label className="fw-bold  mb-2">Name:</label>
            <input className="form-control border border-dark"></input>
          </div>
          <div className=" mb-4">
            <label className="fw-bold  mb-2">Email:</label>
            <input className="form-control border border-dark"></input>
          </div>
          <div className=" mb-4">
            <label className="fw-bold mb-2">Message:</label>
            <textarea className="form-control border border-dark"></textarea>
          </div>
          <button
            className="btn btn-light border border-dark px-5 pt-2 pb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <h6 className="mt-4 fw-bold">For contact: info.blogsite@gmail.com</h6>
    </div>
  );
}

export default Contact;
