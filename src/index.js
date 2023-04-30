import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {useState} from "react";

const Greeting = () => {
    const [userName, setUserName] = useState(""); //string variable
    const [newArray, setNewArray] = useState([]); //array variable
    const [city, setCity] = useState([
      { id: "1", name: "Yangon"},
      { id: "2", name: "Mandalay"},
      { id: "3", name: "Sagaing"},
      { id: "4", name: "MayMyoe"}
    ]);
    const [selectedCityValue,setSelectedCityValue] = useState("");
    const [genderRadio, setRadio] = useState([
      { id: "1", name: "Male"},
      { id: "2", name: "Female"},
      { id: "3", name: "Others"},
    ]);
    const [selectRadio,setSelectRadio] = useState("");
    

    //For useName Text Box Change
    const userNameChange = (e) =>{
        setUserName(e.target.value)
    }

    //For add button to add value to array
    const addName = () =>{
        setNewArray(nameArray => [...nameArray, userName]);
        console.log(newArray);
    }

    const citySelectChange = (e) => {
      setSelectedCityValue(e.target.value)
    }

    const radioChange = (data) => {
      setSelectRadio(data.target.value)
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
      })}<br></br>

      <select value = {selectedCityValue} onChange = {citySelectChange}>
        <option value="">--select city--</option>
        {city.map((data,index) => {
          return(
            <option key={index} value={data.name}>
              {data.name}
            </option>
          )
        })}
      </select>
      <br></br>
      <h1>Selected City: {selectedCityValue}</h1><br></br>

      {genderRadio.map((data,index) => {
        return(
          <>
          <input
            type="radio"
            key={index}
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