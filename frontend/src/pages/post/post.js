import React from "react";
import "./post.css";

let data = {};

function Post() {
  return (
    <div>
      <div className="Base">
        <div>
          <div className="ImageContainer">
            <img src={data.image_url} alt="new"></img>
          </div>
          <div>
            <h1>{data.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
