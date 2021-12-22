import React, { useEffect } from "react";
import "./post.css";
import axios from "axios";


function Post() {
  let data = {
    image_url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    title: "Title",
    upload_date: "upload date",
    caption: "Caption",
    description: "Description is this",
    approved: true
  };
  
  
  
  return (
    <div>
      <div className="Base">
        <div>
          <div className="ImageContainer">
            <img src={data.image_url} alt="new"></img>
          </div>
          <div className="Text">
            <h1 className="primary-font">{data.title}</h1>
            <h4 className="primary-font">{data.upload_date}</h4>
            <p className="primary-font">Caption: {data.caption}</p>
            <p className="primary-font">Description: {data.description}</p>
          </div>
          <div className="Approval">
            <h4 className="primary-font">Approval Status: {data.approved}</h4>
          </div>
          <div className="Comments"></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
