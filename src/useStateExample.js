import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {useState} from "react";

const Greeting = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("jj@.com");

    const userNameChange = (e) =>{
        setUserName(e.target.value)
    }
    const userEmailChange = (e) =>{
      setUserEmail(e.target.value)
  }

    return (
    <>
    <h1>User Name: {userName}</h1>
    <br></br>
    <input
        placeholer="Enter User Name"  
        type="text"
        value={userName}
        onChange={userNameChange}
    ></input>
    <br></br>
    <h1>Email: {userEmail}</h1>
    <br></br>
    <input
        placeholer="Enter User Email"  
        type="text"
        value={userEmail}
        onChange={userEmailChange}
    ></input>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting/>)