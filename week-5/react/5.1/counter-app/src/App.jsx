import { useState } from 'react'
import './App.css'


function App() {
  //todo app
  //todos{
  // 
  //}
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [todos, setTodo] = useState([
    {
      title:"Go to gym",
      description: "Go to gym from 7-9",
      isCompleted: false
    },
    {
      title:"Study DSA",
      description: "study DSA from 9-100",
      isCompleted: true
    },
  ]);
  function addTodo(){
    if(!title || !description)return 
    setTodo([{
      title:title,
      description: description, 
      isCompleted: false
    },...todos])
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <input type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <input type="text" id='description' value={description}  onChange={(e)=> setDescription(e.target.value)}/>
      <button onClick={()=>{addTodo(title, description)}}>Add todo</button>
      {todos.map((todo)=><Todo key={todo.title+todo.description+todo} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo(props){
   return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
   </div>
}


export default App
