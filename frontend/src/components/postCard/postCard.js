import React, { useEffect, useState } from "react";
import "./postCard.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";

// let data = {
//   _id: "61c4b0064e0088fc92e4ab63",
//   // _id: "61c26d93f093c3de6204fe6a",
//   image_url:
//     "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
//   title: "Title",
//   upload_date: "upload date",
//   caption: "Caption",
//   short_desciption: "Description is this",
//   approved: true,
// };

let headers = { "x-access-token": sessionStorage.getItem("x-token") };

export default function PostCard({ id, setselectedpostcard }) {
  let [content, setContent] = useState([]);
  console.log(id);
  useEffect(() => {
    async function fetchMyAPI() {
      //first time call when page opens
      content = await getContent(id);
    }

    // headers = {
    //   "x-access-token": sessionStorage.getItem("x-token"),
    // };

    headers = {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNjFiYzJhYThhNTBiMjM4NGNiYmQiLCJlbWFpbCI6Indhc2lmLmthcmltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQwMjc5NTQxLCJleHAiOjE2NDAzNjU5NDF9.IkdNB1o7RyAvVD-zcFff1ZWDMWzIb-FiEupelrBZjPA",
    };

    fetchMyAPI();
  }, []);

  async function getContent(id) {
    let response = await axios.get("http://localhost:5000/content/" + id, {
      headers: headers,
    });
    setContent(response.data.data);
  }

  return (
    <div>
      <React.Fragment>
      <Link to="/view/" >
        <button
          className="RoutingButton"
          type="button"
          onClick={() => {
            setselectedpostcard(content._id);
          }}
        >
          <div className="Heading">
            <div className="ContentCard">
              <div className="ContentContainer">
                <div className="ImageContainer">
                  <img
                    src={content.image_url}
                    width="100%"
                    height="100%"
                    alt="new"
                  ></img>
                </div>
                <div className="MetaData">
                  <div className="Title">
                    <h1 className="primary-font">{content.title}</h1>
                    <h4 className="primary-font">{content.date}</h4>
                  </div>
                  <p className="primary-font">{content.description}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </Link>
      </React.Fragment>
    </div>
  );
}
//missing approval icon & tags
