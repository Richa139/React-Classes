import React, { useState } from "react";
import Header from "./Header";
import File from "./File";
// function States(){
//    return (
//      <p>frerf</p>
//    )
// }

const States = () => {
    // var name="richa";
    // name="karan"
    const [name , setName]=useState(true);
    // setName(()=>"lovish")
    // console.log(name , "name or state")

    const handleChange=()=>{
      setName("lovish")
      setName("karan")

    }
    // name="lovish"
    console.log(name , "name")
  return (
    <>
      <div>
        <p>States in REact {name}</p>
        <h1>dhgjsdhgfhsdfg</h1>
        <button onClick={()=>handleChange()}>Button Handler</button>
        {/* <button onClick={()=>handleChange()}>Button Handler</button> */}
        <Header data={name} setName={setName}/>
        {/* <File name={name} setName={setName}/> */}
      </div>
    </>
  );
};
export default States;
