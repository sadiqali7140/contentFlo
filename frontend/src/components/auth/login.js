import React, { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Login({ setLoggedInUI }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Main function that calls the login api
  async function loginAPI(emailField, passwordField) {
    // To avoid pressing on login button while request is being performed
    if (isSending)
      return;

    setIsSending(true);
    if (emailField == "" || passwordField == "") {
      setErrorMessage("Empty Fields");
      setErrorVisible(true);
      setIsSending(false);
      console.log("sabar ka phal meetha hota hy");
      return;
    }

    try {
      let response = await axios.post("http://localhost:5000/auth/login", {
        email: emailField,
        password: passwordField,
      });
      // let json = response.data;
      console.log(response);
      if (response.data.message === "Success") {
        sessionStorage.setItem("x-token", response.data.token);
        setErrorVisible(true)
        setErrorMessage("Login Successful")
        // console.log(sessionStorage.getItem("x-token"));
      }
      setIsSending(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginAPI(email, password);
  };

  return (
    <div className="Login">
      <h1 className="text-2">LOGIN</h1>
      {/* INPUT AREA */}
      <form onSubmit={handleSubmit}>
        <label className="Label">
          <p className="text-1">EMAIL ID</p>
          <input
            className="Input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p className="text-1">PASSWORD</p>
          <input
            className="Input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="Button" type="submit">
            LOGIN
          </button>
        </div>
      </form>
      {/*             
            <div>
                <button className= "Button" onClick= {() => history.push('/signup')}>SIGNUP</button>
            </div> */}

      {/* {isLoggedIn ? <Link to= "/dashboard">{console.log("SUCCESS")}</Link>: null} */}

      {/* ERROR MESSAGE AREA */}
      <div className="Error-Message">
        {errorVisible ? <h3>{errorMessage}</h3> : null}
      </div>
    </div>
  );
}
