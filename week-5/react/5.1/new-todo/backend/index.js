const express = require('express');
const { createTodo, updateTodo } = require('./types');
const cors = require('cors')
const { todo } = require('./db');

const app =express()

app.use(express.json());
app.use(cors());

//body, title

app.post('/todo',async (req,res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({err:"Invalid body sent" +parsedPayload});
        return;
    }
    try{
        const response = await todo.create({
            title:payload.title,
            description: payload.description,
            completed:false
        })
        res.json({msg:"Added a new todo"});
    }catch(e){
        res.status(404).json({error:e});
    }
    
})


app.get('/todos',async (req,res)=>{
    try{
        const response = await todo.find({})
        res.json({todos:response});
    }catch(e){
        res.status(404).json({error:e});
    }
})
app.put('/completed',async(req,res)=>{
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({err:"Invalid body sent"});
        return;
    }
    try{
        const response = await todo.updateOne({
            _id:payload.id,
        
        },{
            completed:true
        })
        res.json({msg:"todo marked as completed"});
    }catch(e){
        res.status(500).json({error:e});
    }
})

app.listen(3000,()=>{
    console.log("Application running on http://localhost:3000/ ")
})