import React from "react";
import { ReactDOM } from "react";
import { useEffect } from "react";
import "./addPost.css";
import "../../index.css"
import { useState } from "react";
import axios from "axios"

export default function AddPost() {
    const [data, setData] = useState({
        image_url: "",
        title: "",
        description: "",
        caption: "",
        approved: false,
        created_date: "",
        upload_date: ""
    })

    const [message, setMessage] = useState([])
    const [headers, setHeaders] = useState({})
  
  useEffect(() => {
    async function fetchMyAPI() { //first time call when page opens
    }
  
    setHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('x-token')
    })
  

    fetchMyAPI()
  }, [])

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });}

  async function addPost() {
      setMessage("Adding New Post")
      let response = await axios.post('http://localhost:5000/content/', data, {headers: headers})
    //   setMessage(response.data.header.message)
        console.log(response)
  }

  return (
      <div className="container">
          <div className="containerFormSection">
              <h4 className="primary-font">Add New Post</h4>
              <form className="primary-font form">
                  <div className="col-1">
                      <label>Post Title:</label> <br />
                      <input type="text" name="title" value={data.title} onChange={handleChange}/>
                  </div>
                  <div className="col-2">
                      <label>Caption:</label> <br />
                      <input type="text" name="caption" value={data.caption} onChange={handleChange}/>
                  </div>
                  <div>
                      <label>Description:</label> <br />
                      <textarea type="text" rows="10" cols="50" name="description" value={data.description} onChange={handleChange}/>
                  </div>
                  <div>
                      <label>Image URL</label> <br />
                      <textarea type="text" rows="10" cols="50" name="image_url" value={data.image_url} onChange={handleChange}/>
                  </div>
                  <div>
                      <button
                        type='button'
                        onClick={async() => {
                            await addPost()
                        }}
                        >
                            ADD POST
                        </button>
                  </div>
              </form>
              {message === "" ? <></> : <h1>{message}</h1>}
          </div>
      </div>
  )
}