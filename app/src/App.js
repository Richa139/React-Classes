
import "./App.css";
import Doubts from "./Doubts";
import Header from "./Header";
import States from "./States";
import React, { useState } from "react";
function App() {
  var [data, setData] = useState(0);
  const [data1 , setSecData]=useState(false);
  //  console.log(data++, "count data")
  const handleClick = () => {
    var data = 0;
    // setData(data++);
    data = data + 1;
    setData(data);
  };
  const arr = [1, 62, 13, 4, 5 , 6];
  const dataarr=["one" , "two" , "th" , "f" , "five"]
  const arr1 =[
    {id:"1" , name:"richa"},
    {id:"2" , name:"aman"}
  ]
  console.log(arr1 , "object data")
  for (var i = 0; i < 5; i++) {
    console.log(i, arr[i]);
  }
  return (
    <div className="App">
      {/* <header > */}
      <h1> Hello , I am Richa {data}</h1>
       {data1 ? <p>"yes"</p> : <p>no</p>}
      {arr1.map((item , index) => {
        debugger
        {/* return console.log(item , "hghfhgf" , index); */}
        return <Doubts item={item} setSecData={setSecData}/>
      })}
      {/* <Doubts /> */}
      {/* </header> */}
      {/* <button onClick={()=>handleClick()}>{data}</button> */}
      {/* <Header/> */}
      {/* <States/> */}
    </div>
  );
}

export default App;

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

// Array methods- push , pop, shift, unshift  , concat , indexOf , foreach , map , filter , reduce , slice , unslice

// Synchronous Programmaing
// Asynchrounous Programming

// console.log("first");
// const Data=()=>{
//     return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         const data ={id:1 , name:"karan"};
//         resolve(data);
//     },1000);
// })
// }

// Data().then(data=>{
//     console.log("resolve data" , data);
// })
// .catch(err=>{
//     console.log(err)
// })

// console.log("last")
