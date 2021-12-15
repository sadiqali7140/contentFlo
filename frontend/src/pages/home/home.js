import React from "react";
import "./home.css";
import "../../index.css";
import QuickView from "../../components/quickView/quickView";
import Calendar from "../../components/calendar/calendar";
// import PostCard from "../../components/postCard/postCard";
import Carousel from "../../components/carousel/carousel";

function Home() {
  return (
    <div>
      <div className="WelcomeContainer">
        <h1 className="primary-font">Welcome back, Sadiq!</h1>
      </div>
      <QuickView />,
      <Calendar />,
      {/* <PostCard />, */}
      <Carousel />
    </div>
  );
}

export default Home;
