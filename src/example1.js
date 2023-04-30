import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Greeting = () => {
  return (
    <>
    <h1 style={{textAlign: "center", color: "brown"}}>Toy Shop</h1>
    <br></br>
    <main className="main-style">
    <Card title="Ironman" price="5000" image="image/ironman.jpg"/>
    <Card title="Batman" price="10000" image="https://m.media-amazon.com/images/I/81Wix4Jc0oL._AC_UF894,1000_QL80_.jpg"/>
    <Card title="Superman" price="5000" image="https://i.ebayimg.com/images/g/JX8AAOSwQV5jCtnr/s-l1600.png"/>
    </main>
    </>
  )
}

/* const Card = (props) => {
  const{image,title,price} = props;
  console.log(props);
  return(
    <>
      <section className="card">
        <img style={{width:"150px", borderRadius:"20px"}} src={props.image}/>
        <h1>{props.title}</h1>
        <p>Price: {props.price}</p>
        <button onClick={clickHere} style={{width:"100px"}}>Buy</button>
      </section>
    </>
  )
} */

const Card = (props) => {
  const{image,title,price} = props;
  return(
    <>
      <section className="card">
        <img style={{width:"150px", borderRadius:"20px"}} src={image}/>
        <h1>{title}</h1>
        <p>Price: {price}</p>
        <button onClick={clickHere} style={{width:"100px"}}>Buy</button>
        <button onClick={()=>{clickHerePara(title,price)}}>Buy with Parameter</button>
      </section>
    </>
  )
}

const clickHere = () =>{
  alert("You Brought")
}

const clickHerePara = (title,price) =>{
  console.log(title,price);
  alert("You Brought " + title + " and price is " + price)

}

/* const Price = () => {     //P in Price must be capital letter
  return(
    <>
      <p>Price : 20000Ks</p>
    </>
  )
} */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting/>)