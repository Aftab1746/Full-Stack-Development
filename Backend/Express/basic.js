const express = require("express")
const app = express();
const PORT = 4000;

//Get Mathod
app.get("/",(req,res)=>{
    res.status(200).send("Hello from Home Page")
})

app.get("/user",(req,res)=>{
    res.status(200).send("Hello from User Page")
})

//app.put()
app.put("/user",(req,res)=>{
    res.status(200).send("Got a put request at /user")
})

//app.patch
app.patch("/student",(req,res)=>{
     res.status(200).send("Got a patch request at /student path")
})


//app.delete
app.delete("/student",(req,res)=>{
     res.status(200).send("Got a delete request at /student path")
})


app.listen(PORT, () => {    
console.log(`Server run at http://localhost:${PORT}`);  
});