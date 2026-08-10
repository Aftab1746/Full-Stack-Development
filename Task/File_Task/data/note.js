const fs = require("fs/promises")
const path = require("path")

fileName = "notes.txt"
const filePath = path.join(__dirname, fileName)

const data = "My first note"
// fs.writeFile(filePath,data)
// .then((data)=>{
//     console.log("Data done Successfully")
// })
// .catch((err)=>{
// console.err(err)
// })

//Read data from a file
fs.readFile(filePath,"utf-8")
.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})

const now = new Date();
const updateData =  `\n ${now} --  This is update data`
//Append data
fs.appendFile(filePath,updateData)
.then((updateData)=>{
console.log(updateData)
})
.catch((err)=>{
    console.log(err)
})
