const express = require('express');
const app = express();
const fs = require("fs")
const path = require("path")
const fileName = "TASKS_DATA.json"
const filePath = path.join(__dirname,fileName)
const tasks = require("./TASKS_DATA.json")
const PORT = 8000;

//Middleware 
app.use(express.urlencoded({extended: true }))

//GET /api/tasks
app.route("/api/tasks")
.get((req,res)=>{
    res.status(200).json(tasks);
})

//POST /api/tasks
.post((req,res)=>{
   const body = req.body;
   const newTask = {id: tasks.length+1, ...body}
   tasks.push(newTask);
   fs.writeFile(filePath,JSON.stringify(tasks,null,2),(err)=>{
    if(err){
        console.log("Error: ",err)
        res.status(500).send({status: "Error Writing File"})
    }
    res.status(201).send({status: "Success" ,task: newTask})
   })
})

//api/tasks/:id
app.route("/api/tasks/:id")
//GET /api/tasks/:id
.get((req,res)=>{
    const taskID = Number(req.params.id)
    const speciedTask = tasks.find(task=>task.id === taskID)
    if(!speciedTask){
        res.status(404).send({status: "Fail" , user: `User with ID ${taskID} not Found.`})
    }
    else{
        res.status(200).send({status: "Success", task: speciedTask})
    }
})

//PUT /api/tasks/:id
.put((req,res)=>{
  
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});