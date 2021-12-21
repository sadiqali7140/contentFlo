import React from "react";
import "./postCard.css";
import "../../index.css";

// let date = "2021-12-22"
let data = {
  date: "date",
  title: "Post Title",
  short_desciption: "Short description",
  image_url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
}

function PostCard() {
  return (
    <div>
      <div className="Heading">
        <div className="ContentCard">
          <div className="ContentContainer">
            <div className="ImageContainer">
              <img
                src={data.image_url}
                alt="new"
              ></img>
            </div>
            <div className="MetaData">
              <div className="Title">
                <h1 className="primary-font">{data.title}</h1>
                <h4 className="primary-font">{data.date}</h4>
              </div>
              <p className="primary-font">{data.short_desciption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//missing approval icon & tags

export default PostCard;
