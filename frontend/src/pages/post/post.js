import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";


export default function Post() {
  const [data, setData] = useState({
    image_url: "",
    title: "",
    description: "",
    caption: "",
    approved: "",
    created_date: "", //remember to add thsi in form
    upload_date: ""
})

const [message, setMessage] = useState([])
// const [headers, setHeaders] = useState({})
let headers = {}

useEffect(() => {
async function fetchMyAPI() {
  await getContent() //first time call when page opens
}

headers = {
    'Content-Type': 'application/json',
    // 'x-access-token': sessionStorage.getItem('x-token')
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgxNjFiYzJhYThhNTBiMjM4NGNiYmQiLCJlbWFpbCI6Indhc2lmLmthcmltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQwMjc5NTQxLCJleHAiOjE2NDAzNjU5NDF9.IkdNB1o7RyAvVD-zcFff1ZWDMWzIb-FiEupelrBZjPA"
}

fetchMyAPI()
}, [])

async function getContent() {
  // let response = await axios.get('http://localhost:5000/content/' + {_id})
  let response = await axios.get('http://localhost:5000/content/61c2a249cd784b96de249ca1', {headers: headers})
  // console.log(response)
  setData(response.data.data)
}
  
  return (
    <div>
      <div className="Base">
        <div>
          <div className="ImageContainer">
            <img src={data.image_url} alt="new"></img>
          </div>
          <div className="Text">
            <h1 className="primary-font">{data.title}</h1>
            <h4 className="primary-font">{data.upload_date}</h4>
            <p className="primary-font">Caption: {data.caption}</p>
            <p className="primary-font">Description: {data.description}</p>
          </div>
          <div className="Approval">
            <h4 className="primary-font">Approval Status: {data.approved}</h4>
          </div>
          <div className="Comments"></div>
        </div>
      </div>
    </div>
  );
}
