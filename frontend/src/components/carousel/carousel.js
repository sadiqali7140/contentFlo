import React from "react";
import "./carousel.css";
import "../../index.css";
import PostCard from "../postCard/postCard";

function Carousel() {
  return (
    <div>
      <div className="head">
        <PostCard id="61c4fae4468a1941c5f548a1"/>
        <PostCard id="61c5ba996ec074768463ba76"/>
        <PostCard id="61c4b0064e0088fc92e4ab63"/>
      </div>
    </div>
  );
}

export default Carousel;
