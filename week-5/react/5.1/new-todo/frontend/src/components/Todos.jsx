import axios from 'axios';

export function Todo({todos,setTodos}){
    return (
        <div>
            {todos.map((todo)=>{
                return <div key={todo.title}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>{
                        axios.put('http://localhost:3000/completed',{
                            id:todo._id
                        })
                        // fetch("http://localhost:3000/completed",{
                        //     method:"PUT",
                        //     body:JSON.stringify({
                        //         id:todo._id
                        //     }),
                        //     headers:{
                        //         "Content-Type":"application/json"
                        //     }
                        // });
                        todo.completed = true;
                        setTodos(todos)
                        }}>{todo.completed === true? "Completed":"Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}