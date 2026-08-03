const fs = require("fs/promises")
const path = require("path")

const fileName = "fsAsyncAwait.txt"
const filePath = path.join(__dirname,fileName)
const Asyncdata = "This is the initial data in fsAsyncAwait.txt file."

//! fs.writeFile(path, data)
//? path       -> full path of the file to write to
//? data       -> content to write into the file (overwrites if file exists)
//*─────────────────────────────────────────────*//
// const asyncAwaitWriteFunc = async() =>{
//     try {
//         await fs.writeFile(filePath,Asyncdata)
//         console.log("Data Write in Async Await File Successfully.")
//     } catch (err) {
//         console.log("Error: ",err)
//     }
// }

// asyncAwaitWriteFunc();


//! fs.readFile(path, encoding)
//? path       -> full path of the file to read
//? encoding   -> character encoding used to return data as a string (e.g. "utf-8")
//*─────────────────────────────────────────────*//
//ReadFile
// async function asyncAwaitReadFunc(){
//     try {
//         const data = await fs.readFile(filePath,"utf-8")
//         console.log(data)
//     } catch (err) {
//         console.log("Error: ",err)
//     }
// }
// asyncAwaitReadFunc();


//! fs.appendFile(path, data)
//? path       -> full path of the file to append to
//? data       -> content to add at the end of the existing file content
//*─────────────────────────────────────────────*//
//Append File
const updateData = "\nThe is the updated data in File."
const appendAsyncAwaitFunc= async()=>{
    try {
        await fs.appendFile(filePath,updateData)
        console.log("Data updated successfully.")
    } catch (err) {
         console.log("Error: ",err)
    }
}

appendAsyncAwaitFunc()


//! fs.unlink(path)
//? path       -> full path of the file to delete
//*─────────────────────────────────────────────*//
//Delete File
const unlinkAsyncAwaitFunc = async()=>{
    try {
        await fs.unlink(filePath)
        console.log("File Deleted Successfully.")
    } catch (err) {
        console.log("Error: ",err)
    }
}

// unlinkAsyncAwaitFunc();


//! fs.rename(oldPath, newPath)
//? oldPath    -> current full path of the file
//? newPath    -> new full path (including new name) for the file
//*─────────────────────────────────────────────*//
//Rename File
const newFileName = "fsAsyncAwaitRenamed.txt"
const newFilePath = path.join(__dirname,newFileName)

const renameAsyncAwaitFunc = async()=>{
    try {
        await fs.rename(filePath,newFilePath)
        console.log("File Renamed Successfully.")
    } catch (err) {
        console.log("Error: ",err)
    }
}

// renameAsyncAwaitFunc();