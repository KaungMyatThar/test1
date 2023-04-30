import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {useState} from "react";

const Greeting = () => {
    const [genderRadio, setRadio] = useState([
      { id: "1", name: "Male"},
      { id: "2", name: "Female"},
      { id: "3", name: "Others"},
    ]);
    const [selectRadio,setSelectRadio] = useState("");
    
    const radioChange = (e) => {
      setSelectRadio(e.target.value)
    }

    return (
    <>
       {genderRadio.map((data,index) => {
        return(
          <>
          <input
            type="radio"
            name={data.name}
            value={data.id}
            onChange={() => radioChange(data)}
            checked={selectRadio == data.name ? true : false}/>
            <label>{data.name}</label>
            </>
        )
      })}
      <p>Your gender is {selectRadio}</p>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting/>)