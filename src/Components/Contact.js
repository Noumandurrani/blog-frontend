import React, { useEffect } from "react";

function Contact() {
  return (
    <div style={{ marginTop: 120 }}>
      <h3
        className=" text-center"
        style={{
          backgroundColor: "#dfbfb1",
          fontSize: "70px",
          height: 180,
          paddingTop: "40px",
          fontWeight: "bolder",
        }}
      >
        Contact Us
      </h3>
      <hr></hr>
      <div className="container mb-4">
        <div className="row">
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
          {/* ///////////////////// */}
          <div className="col-lg-6 text-end">
            <h6 className="mt-4 fw-bold">
              For contact: info.blogsite@gmail.com
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
