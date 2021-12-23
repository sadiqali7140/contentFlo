import React from "react";
import ReactDOM from "react-dom";
import QuickView from "./components/quickView/quickView";
import CalendarCard from "./components/calendarCard/calendarCard"
import Calendar from "./components/calendar/calendar";
import ContentPlan from "./pages/contentPlan/contentPlan";
import Home from "./pages/home/home";
import Revisions from "./pages/revisions/revisions";
import Post from "./pages/post/post";
import AddPost from "./components/addPost/addPost"
import Login from "./components/auth/login"

ReactDOM.render(
  // <Home />,
  // <Revisions />,
  // <Post />,
  // <AddPost />,
  <Login />,
  document.getElementById("root")
);