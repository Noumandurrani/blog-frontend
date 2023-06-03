import axios from "axios";
import React, { useEffect, useState } from "react";
function Blog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h3 className="fs-1 fw-bolder text-center pt-5 pb-5 bg-info">
        ------------The Blog----------
      </h3>
      <div className="container text-center">
        {/* //// */}

        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4">
              <div
                style={{ height: 300 }}
                className="card mb-5 border-success"
                key={item.id}
              >
                <div className="card-title p-3">
                  <h5>{item.title}</h5>
                </div>
                <div className="card-body">
                  <p>{item.body}</p>
                </div>
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
