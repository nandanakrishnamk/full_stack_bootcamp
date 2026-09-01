const express =require('express');
const app=express();

app.use(express.json());
const PORT=3000;
let todos=[
    {
        id:1,task:"Learn Node.js",completed:false
    },
    {
        id:2,task:"Learn Express.js",completed:false
    }
]

//route
app.get('/todos',(req,res)=>{
    res.json(todos);
});
app.get('/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const todo=todos.find(todo=>todo.id===id);
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    res.json(todo);
});  

app.post('/todos',(req,res)=>{
    const {task,completed}=req.body;
    const newTodo={
        id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        task,
        completed
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const todo=todos.find(todo=>todo.id===id);
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    const {task,completed}=req.body;
    todo.task=task;
    todo.completed=completed;
    res.json(todo);
});

app.delete('/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const todo=todos.find(todo=>todo.id===id);
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    todos=todos.filter(t=>t.id!==id);
    res.json({message:"Todo deleted successfully"});
});

app.listen(PORT,()=>{
    console.log(`Server is running on port at http://127.0.0.1:${PORT}`);
});

