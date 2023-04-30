import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {useState} from "react";

const Greeting = () => {
    const [count, setCount] = useState("");

    const countPlus = () =>{
        count ++;
        console.log(count)
    }

  return (
    <>
      
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting/>)