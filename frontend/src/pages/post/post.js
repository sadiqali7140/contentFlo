import React from "react";
import "./post.css";

function Post() {
  return <div >
      <div className="Base">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  </div>;
}

export default Post;
