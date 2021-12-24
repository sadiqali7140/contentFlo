import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";

let data = {
  _id: "61c4b0064e0088fc92e4ab63",
  image_url:
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  title: "Title",
  upload_date: "upload date",
  caption: "Caption",
  short_desciption: "Description is this",
  approved: true,
};

let headers = { "x-access-token": sessionStorage.getItem("x-token") };

export default function Post() {
  // let [content, setContent] = useState({
  //   image_url: "",
  //   title: "",
  //   description: "",
  //   caption: "",
  //   approved: "",
  //   created_date: "", //remember to add thsi in form
  //   upload_date: "",
  // });

  let [content, setContent] = useState([]);
  let [checked, setChecked] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      content = await getContent(data._id); //first time call when page opens
      console.log(data._id)
    }

    headers = {
      "x-access-token": sessionStorage.getItem("x-token"),
    };
    console.log(headers)

    // headers = {
    //   "x-access-token":
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNjFiYzJhYThhNTBiMjM4NGNiYmQiLCJlbWFpbCI6Indhc2lmLmthcmltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQwMjc5NTQxLCJleHAiOjE2NDAzNjU5NDF9.IkdNB1o7RyAvVD-zcFff1ZWDMWzIb-FiEupelrBZjPA",
    // };

    fetchMyAPI();
  }, []);

  async function getContent(id) {
    let response = await axios.get("http://localhost:5000/content/" + id, {
      headers: headers,
    });
    setContent(response.data.data);
    console.log(response)
  }

  const handleChange = () => {
    setChecked(!checked);
    content.approved=checked //needs to call update content API to change the data on the backend
    console.log(content)
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        {label}
      </label>
    );
  };

  return (
    <div>
      <div className="Base">
        <div>
          <div className="ImageContainer">
            <img src={content.image_url} alt="new"></img>
          </div>
          <div className="Text">
            <h1 className="primary-font">{content.title}</h1>
            <h4 className="primary-font">{content.date}</h4>
            <p className="primary-font">Caption: {content.caption}</p>
            <p className="primary-font">Description: {content.description}</p>
          </div>
          <div className="Approval">
            <h4 className="primary-font">
              Approval Status: {content.approved}
            </h4>
            <Checkbox
              label="   Good to go?"
              value={content.approved}
              onChange={handleChange}
            />
          </div>
          <div className="Comments"></div>
        </div>
      </div>
    </div>
  );
}
