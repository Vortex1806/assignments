import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todo } from './components/Todos'

function App () {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/todos').then(async (res)=>{
      const json = await res.json();
      setTodos(json.todos);
    });
  },[])
  
  return <div>
    <CreateTodo todos={todos} setTodos={setTodos}/>
    <Todo todos={todos} setTodos={setTodos}/> 
  </div>
}

export default App
