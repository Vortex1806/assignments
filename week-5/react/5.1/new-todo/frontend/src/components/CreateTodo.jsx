import React, { useState } from 'react'

const CreateTodo = ({todos,setTodos}) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    
  return (
    <div>
        <input onChange={(e)=>{setTitle(e.target.value)}} style={{padding:10, margin:10}} type="text" placeholder='title'/><br/><br/>
        <input onChange={(e)=>{setDescription(e.target.value)}} style={{padding:10, margin:10}} type="text" placeholder='description'/><br/><br/>
        <button onClick={()=>{
                        fetch("http://localhost:3000/todo",{
                            method:"POST",
                            body:JSON.stringify({
                                title: title,
                                description:description
                            }),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        }).then(setTodos([...todos,{title:title, description:description, completed:false}]));
        }} style={{padding:10, margin:10}}>Add a todo</button>
    </div>
  )
}

export default CreateTodo