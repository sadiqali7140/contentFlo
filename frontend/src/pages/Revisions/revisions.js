import React from "react";
import "./revisions.css";
import "../../index.css";
import PostCard from "../../components/postCard/postCard";
import ContentFlagged from "../../components/contentFlagged/contentFlagged";
import PastLog from "../../components/pastLog/pastLog";

function Revisions() {
  return (
    <div className="Heading">
      <ContentFlagged />,
      <PastLog />
    </div>
  );
}

export default Revisions;
