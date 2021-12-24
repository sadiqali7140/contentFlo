import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import ContentPlan from "./pages/contentPlan/contentPlan";
import Home from "./pages/home/home";
import Post from "./components/post/post";
import AddPost from "./components/addPost/addPost";
import Login from "./components/auth/login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<Post />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/posts" element={<ContentPlan />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// <Home />,
// <Revisions />,
// <Post />,
// <AddPost />,
// <Login />,
