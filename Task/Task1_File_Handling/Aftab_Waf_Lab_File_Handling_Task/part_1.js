//! require("fs") — imports Node's built-in File System module
//? "fs" → module name, gives access to file/folder operations (create, read, write, delete)
//*─────────────────────────────────────────────────────────────*
const fs = require("fs")

//! require("path") — imports Node's built-in Path module
//? "path" → module name, helps build safe, OS-independent file paths
//*─────────────────────────────────────────────────────────────*
const path = require("path")

//! folderName — name of the folder to create
//? 'part_1' → the literal folder name we want inside this directory
//*─────────────────────────────────────────────────────────────*
const folderName = 'part_1'

//! path.join(__dirname, folderName) — builds full path to the folder
//? __dirname   → current directory of this script (part_1.js)
//? folderName  → the folder name defined above ('part_1')
//*─────────────────────────────────────────────────────────────*
const filePath = path.join(__dirname, folderName)

//! fs.existsSync(filePath) — checks if the folder already exists
//? filePath → the full path being checked
//*─────────────────────────────────────────────────────────────*
if (!fs.existsSync(filePath)) {
    //! fs.mkdirSync(filePath) — creates the folder synchronously
    //? filePath → full path where the new folder will be created
    //*─────────────────────────────────────────────────────────────*
    fs.mkdirSync(filePath)
    console.log("Folder part_1 created successfully.")
}
else {
    console.log('Folder "part_1" already exists.');
}

//Write a code statement to create a file named "test.txt". 
//! TestPathName — name of the text file to be created
//? "test.txt" → literal file name
//*─────────────────────────────────────────────────────────────*
const TestPathName = "test.txt"

//! path.join(__dirname, TestPathName) — builds full path to test.txt
//? __dirname     → current directory of this script
//? TestPathName  → file name defined above ("test.txt")
//*─────────────────────────────────────────────────────────────*
const fileTextPath = path.join(__dirname, TestPathName)

//Write a code statement to write your registration number inside the "test.txt" file. 
//! regNum — registration number to be stored in the file
//? "04072113011" → literal registration number string
//*─────────────────────────────────────────────────────────────*
const regNum = "04072113011"

//! fs.writeFile(path, data, callback) — writes/creates file asynchronously
//? fileTextPath → full path of the file to write to
//? regNum       → data (registration number) being written
//? (err) => {}  → callback, runs after write completes; err is null if successful
//*─────────────────────────────────────────────────────────────*
fs.writeFile(fileTextPath, regNum, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("test.txt created and registration number written successfully.");
    }

    // Write a code statement to read the data from the "test.txt" file (your registration 
    // number) and display it on the console.
    //! fs.readFile(path, encoding, callback) — reads file content asynchronously
    //? fileTextPath → full path of file to read
    //? "utf-8"      → encoding, ensures data returns as readable text (not buffer)
    //? (err, data)  → callback; err first (Node convention), data holds file content
    //*─────────────────────────────────────────────────────────────*
    fs.readFile(fileTextPath, "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
        } else {
            console.log("Your registration number is:", data);
        }

        //. Write code to overwrite your registration number in the "test.txt" with the last four 
        //digits of your registration number. 
        //! updateRegNum — last four digits of the registration number
        //? "3011" → literal value used to overwrite the file
        //*─────────────────────────────────────────────────────────────*
        const updateRegNum = "3011"

        //! fs.writeFile(path, data, callback) — overwrites entire file content
        //? fileTextPath  → full path of file to overwrite
        //? updateRegNum  → new data replacing old content
        //? (err) => {}   → callback, confirms success/failure of overwrite
        //*─────────────────────────────────────────────────────────────*
        fs.writeFile(fileTextPath, updateRegNum, (err) => {
            if (err) {
                console.log("Error : ", err)
            }
            else {
                console.log("Registration Number updated , check test.txt.")
            }

            // Read the file again to confirm the overwrite worked
            //! fs.readFile(path, encoding, callback) — re-reads file to verify update
            //? fileTextPath   → full path of file to read
            //? "utf-8"        → encoding for readable text output
            //? (err, updateData) → callback; updateData holds the newly read content
            //*─────────────────────────────────────────────────────────────*
            fs.readFile(fileTextPath, "utf-8", (err, updateData) => {
                if (err) {
                    console.log("Error: ", err)
                }
                else {
                    console.log("Registration Number Updated: ", updateData)
                }

                // Erase data from the file "test.txt"
                //! fs.writeFile(path, "", callback) — erases file by writing empty string
                //? fileTextPath → full path of file to erase
                //? ""           → empty string, replaces all existing content
                //? (err) => {}  → callback confirming erase success/failure
                //*─────────────────────────────────────────────────────────────*
                fs.writeFile(fileTextPath, "", (err) => {
                    if (err) {
                        console.log("Error erasing file:", err);
                    } else {
                        console.log("test.txt has been erased.");
                    }

                    // Repeat step 5: write registration number back
                    //! fs.writeFile(path, data, callback) — writes reg number back into empty file
                    //? fileTextPath → full path of file to write to
                    //? regNum       → original registration number being restored
                    //? (err) => {}  → callback confirming write success/failure
                    //*─────────────────────────────────────────────────────────────*
                    fs.writeFile(fileTextPath, regNum, (err) => {
                        if (err) {
                            console.log("Error writing file:", err);
                        } else {
                            console.log("Registration number written again:", regNum);
                        }
                    });
                });
            })
        })
    });
});