import axios from "axios";
import React, { useEffect, useState } from "react";
import OIP from "./Logos/OIP.jpeg";
import { Link } from "react-router-dom";
function Blog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/api/project/post-all")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        The Blog
      </h3>
      {/* <hr></hr> */}
      <div className="container ">
        {/* //// */}

        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4">
              <div
                style={{ width: "" }}
                className="card mb-5 border-success"
                key={item.id}
              >
                <img src={OIP}></img>
                <div className="card-body">
                  <h5 className="card-title p-3">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                  <Link
                    to={`/blogdetail/${item._id}`}
                    className="d-flex justify-content-end"
                  >
                    <div className="btn btn-light border-dark">Read more</div>
                  </Link>
                </div>
                {/* <hr></hr> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Get() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Get</h1>

//         {data.map((item) => (
//           <div className="row justify-content-center">
//             <div className="col-lg-5">
//               <div className="card mb-5 border-success" key={item.id}>
//                 <div className="card-title p-3">
//                   <h5>{item.title}</h5>
//                 </div>
//                 <div className="card-body">
//                   <p>{item.body}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Get;
