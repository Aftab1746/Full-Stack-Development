//! syntax: require('module-name');
//? fs/promises: Node's built-in File System module, Promise-based version — lets you use .then()/.catch() or async/await instead of callbacks.
//*───────────────────────────────────────────*
const fs = require('fs/promises')
const path = require('path')
const PathName = path.join(__dirname,"fsPromises.txt")

//! syntax: fs.readdir(path).then(data ⇒ ...).catch(err ⇒ ...);
//? path: Folder whose contents you want to list (here, the current dir).
//? data: Array of file/folder names inside that path.
//*───────────────────────────────────────────*
// fs.readdir(PathName)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


// Write data using promises
const data = "This is new data writing using promises.then().catch"

//! syntax: fs.writeFile(path, data).then(() ⇒ ...).catch(err ⇒ ...);
//? path: File to write to (created if it doesn't exist).
//? data: Content written to the file — overwrites existing content.
//*───────────────────────────────────────────*
// fs.writeFile(PathName, data).
// then((data)=>{console.log("Data Write in file Successfully")}).
// catch((err)=>{console.log("Error: ",err)})

//Read Data from file using promises

//! syntax: fs.readFile(path, options).then(data ⇒ ...).catch(err ⇒ ...);
//? path: File to read from.
//? options: Encoding ('utf-8') — omit to get a raw Buffer instead.
//*───────────────────────────────────────────*
fs.readFile(PathName,"utf-8").
then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("Error: ", err)
})


//Append Data using promises
const updateData = "This is the Update data write\n"

//! syntax: fs.appendFile(path, data).then(() ⇒ ...).catch(err ⇒ ...);
//? path: File to append to (created if it doesn't exist).
//? data: Content added to the end of the file — existing content is kept, not overwritten.
//*───────────────────────────────────────────*
fs.appendFile(PathName,updateData)
.then((updateData)=>{
console.log("Write Update data succussfully")
})
.catch((err)=>{
    console.log("Error: ",err)
})