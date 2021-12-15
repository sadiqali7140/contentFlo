import React from "react";
import "./carousel.css";
import "../../index.css";
import PostCard from "../postCard/postCard";

function Carousel() {
  return (
    <div>
      <div className="head">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default Carousel;
