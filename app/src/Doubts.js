import React, { useState } from "react";
const Doubts = (item) => {
    console.log(item , "pppp")
  const [data, setData] = useState(true);
  const [sec , setSec]=useState(false);
  if(data || sec){
    console.log("or operator works")
  }
  const handleClick=()=>{
    item.setSecData(true)
  }
  return (
    <>
    {/* Ternary operator */}
      {/* {data ? (
        sec ? (
          <p>"sec</p>
        ) : (
          <p>sec no</p>
        )
      ) : (
        <p>No , it is </p>
      )} */}

      {/* {
        data && <p>yes</p>
      } */}
      <div>
        <h1>Card</h1>
        <p>Index:{item.item.id}</p>
        <p>Card body : {item.item.name}</p>
        <p>Card Text</p>
        <button onClick={handleClick}>update value</button>
      </div>
    </>
  );
};
export default Doubts;
