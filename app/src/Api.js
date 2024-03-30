import React, { useState , useEffect} from "react";
const Api =()=>{
    // Get 
    // Post
    // Delete
    // Patch
    // put


    // Status Code 
    // 200 - api working
    // 500 - Internal sever error 
    // 404 - api not found

    // api fetching 
    // => fetch 
    // => axios 
    // react-toastify
    const [data , setData] =useState([]);
    useEffect(()=>{
      console.log("dhgsjhdg")
      fetch("https://jsonplaceholder.typicode.com/users")
           .then(response=> response.json())
           .then(json=> setData(json))
           .catch(error => console.log(error))
    },[])
    const handleClick =()=>{
        return (
          fetch("https://jsonplaceholder.typicode.com/users")
           .then(response=> response.json())
           .then(json=> setData(json))
           .catch(error => console.log(error))
              
        )
    }
    console.log(data , "state")
    return (
        <>
           <button onClick={handleClick}>button on click data </button>
           {/* <h1>Api data {data[data.name]}</h1> */}
           {data && data.length>0 && data[16]?.phone}
           { data ? data?.length>0 ? data.map((item)=>{
            return(
            <>
            <p>Name:----{item.name}</p>
            <p>Email:----{item.email}</p>
            <p>Address:----{item.address.street}</p>
            </>
            )
           }) : <h1>No Data Found</h1> : <p>Loader</p>}
        </>
    )
}
export default Api