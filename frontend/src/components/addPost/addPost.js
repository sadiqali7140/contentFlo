import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";
import "./addPost.css";
import "../../index.css";
import { useState } from "react";
import axios from "axios";

export default function AddPost() {
  // const [data, setData] = useState({
  //     image_url: "",
  //     title: "",
  //     description: "",
  //     caption: "",
  //     approved: false,
  //     created_date: "", //remember to add thsi in form
  //     upload_date: ""
  // })

  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);

  let headers = { "x-access-token": sessionStorage.getItem("x-token") };

  useEffect(() => {
    async function fetchMyAPI() {
      //first time call when page opens
    }

    headers = {
    //   "x-access-token": sessionStorage.getItem("x-token"),
      'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNjFiYzJhYThhNTBiMjM4NGNiYmQiLCJlbWFpbCI6Indhc2lmLmthcmltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQwMjc5NTQxLCJleHAiOjE2NDAzNjU5NDF9.IkdNB1o7RyAvVD-zcFff1ZWDMWzIb-FiEupelrBZjPA"
    };

    fetchMyAPI();
  }, []);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function addPost() {
    setMessage("Adding New Post");
    let response = await axios.post("http://localhost:5000/content/", data, {
      headers: headers,
    });
    setMessage(response.data.message);
    // console.log(response)
  }

  return (
    <div className="container">
      <div className="containerFormSection">
        <h4 className="primary-font">Add New Post</h4>
        <form className="primary-font form">
          <div className="col-1">
            <label>Post Title:</label> <br />
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <label>Image URL:</label> <br />
            <input
              type="text"
              name="image_url"
              value={data.image_url}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label> <br />
            <textarea
              type="text"
              rows="10"
              cols="50"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Caption:</label> <br />
            <textarea
              type="text"
              rows="10"
              cols="50"
              name="caption"
              value={data.caption}
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <label>Upload Date:</label> <br />
            <input
              type="text"
              name="upload_date"
              value={data.upload_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={async () => {
                await addPost();
              }}
            >
              ADD POST
            </button>
          </div>
        </form>
        {message === "" ? <></> : <h1>{message}</h1>}
      </div>
    </div>
  );
}
