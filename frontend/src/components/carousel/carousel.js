import React from "react";
import "./carousel.css";
import "../../index.css";
import Card from "../card/card";

function Carousel() {
  return (
    <div>
      <div className="head">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Carousel;
