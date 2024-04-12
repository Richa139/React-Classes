import React , {useState}from "react";

function PostApi (){
     const [data , setData]=useState({
        title:'ttt',
        body:'',
        userId:1
     })

     console.log(data , "state values")
    const handleChange = (event)=>{
      console.log(event.target.value);
      setData(
        {
            ...data , 
            [event.target.name]: event.target.value
        }
      )
    }
    const handleSubmit= async (event)=>{
       event.preventDefault();
       try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
            method: "Post", 
            body: JSON.stringify(data), 
            headers:{
                "Content-Type": 'application/json'
            }
        })
        setData({
            title:"",
            body:"",
            userId:1
        })
       }
       catch(err){
        console.log(err , "error")
       }
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
             type="text"
             placeholder="title"
             name="title"
             value={data.title}
             onChange={handleChange}
            />
            <textarea
            name="body"
            value={data.body}
            onChange={handleChange}
            placeholder="body"
            ></textarea>
            <button type="submit"> Create Post</button>
          </form>
        </>
    )
} 
export default PostApi;