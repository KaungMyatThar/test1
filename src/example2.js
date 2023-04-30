import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {useState} from "react";

const Greeting = () => {
    const [userName, setUserName] = useState("");
    const [newArray, setNewArray] = useState([]);

    //For useName Text Box Change
    const userNameChange = (e) =>{
        setUserName(e.target.value)
    }

    //For add button to add value to array
    const addName = () =>{
        setNewArray(nameArray => [...nameArray, userName]);
        console.log(newArray);
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

      <h1 style={{marginTop:"20px"}}>Add to NameArray: {userName}</h1>
      <button style={{padding:"5px"}} onClick={addName}>Add Name</button>
      {newArray.map((data,index) => {
        return(
          <Fragment key={index}>
            <p>{data}</p>
          </Fragment>
          
        )
      })}
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting/>)