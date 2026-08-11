const fs = require('fs');
const path = require('path');

const filename = "info.txt";
const storageDir = path.join(__dirname, "storage");
const filePath = path.join(storageDir, filename);
// const data = "Aftab Burki";

// //Write data to the file
// fs.appendFileSync(filePath, data + "\n");
// //console.log("File created successfully");

//Write code to overwrite the content in "info.txt" with only the first letter of your first name 
//and the first letter of your last name (e.g., "John Doe" becomes "JD"). 
const data = "Aftab Burki";

//! syntax: string.split(separator).map(item ⇒ ...).join(separator);
//? split: Breaks "Aftab Burki" into ["Aftab", "Burki"].
//? map: Grabs the first letter of each word and uppercases it.
//? join: Glues the letters back into a single string ("AB").
//*───────────────────────────────────────────*
const initials = data
  .split(" ")
  .map(name => name.charAt(0).toUpperCase())
  .join("");

  
//! syntax: fs.writeFileSync(path, data, options);
//? path: File to write to (created if it doesn't exist).
//? data: Content to write — overwrites everything already there.
//? options: Encoding ('utf-8') or no encoding for binary data.
//*───────────────────────────────────────────*
fs.writeFileSync(filePath, initials, "utf-8");
console.log("File content overwritten with initials successfully.");


//! syntax: fs.readFileSync(path, options);
//? path: File to read from.
//? options: Encoding ('utf-8') — omit to get a raw Buffer instead.
//*───────────────────────────────────────────*
const readData =  fs.readFileSync(filePath, "utf-8");
console.log(readData);