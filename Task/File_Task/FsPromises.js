//! syntax: require('module-name');
//? fs/promises: Node's built-in File System module, Promise-based version — lets you use .then()/.catch() or async/await instead of callbacks.
//*───────────────────────────────────────────*
const fs = require('fs/promises')
const path = require('path')
const PathName = path.join(__dirname)

//! syntax: fs.readdir(path).then(data ⇒ ...).catch(err ⇒ ...);
//? path: Folder whose contents you want to list (here, the current dir).
//? data: Array of file/folder names inside that path.
//*───────────────────────────────────────────*
fs.readdir(PathName)
.then(data=>console.log(data))
.catch(err=>console.log(err))
