import React, { useEffect } from "react";
import "./post.css";
import axios from "axios";


function Post() {
  // let data = {
  //   image_url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  //   title: "Title",
  //   upload_date: "upload date",
  //   caption: "Caption",
  //   description: "Description is this",
  //   approved: true
  // };
  
  const [content, setContent] = useState([])
  
  useEffect(() => {
    async function fetchMyAPI() { //first time call when page opens
      await getContent()
    }
  
    setHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('x-token')
    })
  
    fetchMyAPI()
  }, [])
  
  async function getContent() {
    let response = await axios.get("http://localhost:3000/api/content/" + {id})
    setContent(response.data.data)
  }
  
  return (
    <div>
      <div className="Base">
        <div>
          <div className="ImageContainer">
            <img src={content[0].image_url} alt="new"></img>
          </div>
          <div className="Text">
            <h1 className="primary-font">{content[0].title}</h1>
            <h4 className="primary-font">{content[0].upload_date}</h4>
            <p className="primary-font">Caption: {content[0].caption}</p>
            <p className="primary-font">Description: {content[0].description}</p>
          </div>
          <div className="Approval">
            <h4 className="primary-font">Approval Status: {content[0].approved}</h4>
          </div>
          <div className="Comments"></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
