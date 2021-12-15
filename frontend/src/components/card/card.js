import React from "react";
import "./card.css";
import "../../index.css";

function Card() {
  return (
    <div>
      <div className="Heading">
        <div className="ContentCard">
          <div className="ContentContainer">
            <div className="ImageContainer">
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
              ></img>
            </div>
            <div className="MetaData">
              <h1 className="primary-font">Post Title</h1>
              <p className="primary-font">Short description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
