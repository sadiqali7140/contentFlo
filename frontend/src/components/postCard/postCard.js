import React, { useEffect, useState } from "react";
// import ReacDOM from "react-dom";
import "./postCard.css";
import "../../index.css";
import axios from "axios";

let data = {
  _id: "61c2a249cd784b96de249ca1",
  image_url:
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  title: "Title",
  upload_date: "upload date",
  caption: "Caption",
  short_desciption: "Description is this",
  approved: true,
};

let headers = { "x-access-token": sessionStorage.getItem("x-token") };

function PostCard({ setselectedpostcard }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      //first time call when page opens
      content= await getContent(data._id);
      console.log(content)
    }

    // headers = {
    //   "x-access-token": sessionStorage.getItem("x-token"),
    // };

    headers = {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNjFiYzJhYThhNTBiMjM4NGNiYmQiLCJlbWFpbCI6Indhc2lmLmthcmltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQwMjc5NTQxLCJleHAiOjE2NDAzNjU5NDF9.IkdNB1o7RyAvVD-zcFff1ZWDMWzIb-FiEupelrBZjPA",
    };

    fetchMyAPI();
  }, []);

  async function getContent(_id) {
    let response = await axios.get(
      "http://localhost:5000/content/" + _id,
      {headers: headers}
    );
    setContent(response.data.data);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setselectedpostcard(data._id);
        }}
      >
        <div className="Heading">
          <div className="ContentCard">
            <div className="ContentContainer">
              <div className="ImageContainer">
                <img src={content.image_url} alt="new"></img>
              </div>
              <div className="MetaData">
                <div className="Title">
                  <h1 className="primary-font">{content.title}</h1>
                  <h4 className="primary-font">{content.date}</h4>
                </div>
                <p className="primary-font">{content.short_desciption}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
//missing approval icon & tags

export default PostCard;
