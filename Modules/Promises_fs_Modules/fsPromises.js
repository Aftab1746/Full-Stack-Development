const fs = require("fs/promises")
const path = require("path")

const fileName = "fsPromises.txt"
const filePath = path.join(__dirname,fileName)
const data = "This is the initial data in fsPromises"


//! fs.writeFile(path, data)
//? path  -> full path of the file to write to
//? data  -> content to write into the file (overwrites if file exists)
//*─────────────────────────────────────────────*//
fs.writeFile(filePath,data)
.then(()=>console.log("Data write in fsPromises Successfully."))
.catch((err)=>console.log("Error: ",err))


//! fs.appendFile(path, data)
//? path  -> full path of the file to append to
//? data  -> content to add at the end of the existing file content
//*─────────────────────────────────────────────*//
// const updateData = "\nThis is the updated data is fsPromises"
// fs.appendFile(filePath,updateData)
// .then(()=>console.log("Data Updated in fsPromises"))
// .catch((err)=>console.log("Error: ",err))


//! fs.unlink(path)
//? path  -> full path of the file to delete
//*─────────────────────────────────────────────*//
// fs.unlink(filePath)
// .then(()=>console.log("File Deleted Successfully."))
// .catch((err)=>console.log("Error: ",err))


//! fs.readFile(path, encoding)
//? path      -> full path of the file to read
//? encoding  -> character encoding used to return data as a string (e.g. "utf-8")
//*─────────────────────────────────────────────*//
fs.readFile(filePath,"utf-8")
.then((data)=>console.log(data))
.catch((err)=>console.log("Error: ",err))