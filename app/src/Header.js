import React from "react";
function Header({setName}){
    // console.log(s , "props passing")
// console.log(setName , data , "lllll")
    // const data =null;
    const value="richa";
    // console.log(data , "yes for practoce");
    const dateValue = new Date();
    if(true){
        console.log("rhjfhsf");
    }
    else{
        console.log("jdbfhjsdgf")
    }
    const arr=[1,2,3,4,5];
    const handleState=()=>{
        setName(false);
    }
    return (
        // <React.Fragment>
        // <h1>This is Header Component</h1>
        // <nav>
        //     <ul></ul>
        // </nav>
        // </React.Fragment>
        <>
            <h1>Hello sdfsdsf</h1>
            <nav></nav>
            
            {value=="richa"?<p>yes name is correct</p>:<p>No this dont work </p>}
           <footer>CopyRIght website 2024 {dateValue.getHours()}</footer>
           {arr.map((item)=>{
            item ? (<p>sdfsf</p> ? <h1>gdhfgsf</h1> : <p>dsfsdfsdf</p>):<p>hdgfhsdf</p>
           })}
           <button onClick={handleState()}>Button of Stes </button>
        </>
    )
}

export default Header;