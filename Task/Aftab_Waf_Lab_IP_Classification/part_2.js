//! require("fs") — imports Node's built-in File System module
//? "fs" → module name, gives access to file/folder operations (create, read, write, delete)
//*─────────────────────────────────────────────────────────────*
const fs = require("fs")

//! require("path") — imports Node's built-in Path module
//? "path" → module name, helps build safe, OS-independent file paths
//*─────────────────────────────────────────────────────────────*
const path = require("path")

//! Paths for input and output files
//! path.join(__dirname, "IPs.txt") — builds full path to the input file
//? __dirname   → current directory of this script
//? "IPs.txt"   → literal file name containing the list of IP addresses
//*─────────────────────────────────────────────────────────────*
const ipsFilePath = path.join(__dirname, "IPs.txt")

//! path.join(__dirname, "A.txt") — builds full path to Class A output file
//? __dirname  → current directory of this script
//? "A.txt"    → literal file name that will store Class A IPs
//*─────────────────────────────────────────────────────────────*
const aFilePath = path.join(__dirname, "A.txt")

//! path.join(__dirname, "B.txt") — builds full path to Class B output file
//? __dirname  → current directory of this script
//? "B.txt"    → literal file name that will store Class B IPs
//*─────────────────────────────────────────────────────────────*
const bFilePath = path.join(__dirname, "B.txt")

//! path.join(__dirname, "C.txt") — builds full path to Class C output file
//? __dirname  → current directory of this script
//? "C.txt"    → literal file name that will store Class C IPs
//*─────────────────────────────────────────────────────────────*
const cFilePath = path.join(__dirname, "C.txt")

//! fs.readFile(path, encoding, callback) — reads IPs.txt asynchronously
//? ipsFilePath  → full path of the file to read
//? "utf-8"      → encoding, ensures data returns as readable text (not buffer)
//? (err, data)  → callback; err first (Node convention), data holds file content
//*─────────────────────────────────────────────────────────────*
fs.readFile(ipsFilePath, "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading IPs.txt:", err)
        return
    }

    // Clean and split into individual IPs
    //! data.split("\n").map(...).filter(...) — turns raw file text into a clean IP array
    //? data              → raw file content (one big string with \n between IPs)
    //? split("\n")       → breaks the string into an array wherever a newline occurs
    //? map(ip => ip.trim()) → removes stray \r / whitespace from each IP string
    //? filter(ip => ip.length > 0) → drops any empty entries (e.g. trailing blank line)
    //*─────────────────────────────────────────────────────────────*
    const ipList = data.split("\n").map(ip => ip.trim()).filter(ip => ip.length > 0)

    // Buckets to hold IPs per class
    //! classA / classB / classC — empty arrays that will collect sorted IPs
    //? []  → starts empty, filled as each IP is classified below
    //*─────────────────────────────────────────────────────────────*
    let classA = []
    let classB = []
    let classC = []

    //! ipList.forEach(ip => {...}) — loops through every IP in the array
    //? ip → represents one single IP string during each pass of the loop
    //*─────────────────────────────────────────────────────────────*
    ipList.forEach(ip => {
        //! ip.split(".") — breaks one IP address into its 4 octet-strings
        //? ip → the current IP being processed, e.g. "201.35.137.216"
        //*─────────────────────────────────────────────────────────────*
        const octets = ip.split(".")

        //! parseInt(octets[0]) — converts the first octet from text to a number
        //? octets[0] → first item of the split array (e.g. "201")
        //*─────────────────────────────────────────────────────────────*
        const firstOctet = parseInt(octets[0])

        //! if / else if — checks which class range the first octet falls into
        //? firstOctet → the numeric value being compared against A/B/C ranges
        //*─────────────────────────────────────────────────────────────*
        if (firstOctet >= 1 && firstOctet <= 126) {
            classA.push(ip)
        } else if (firstOctet >= 128 && firstOctet <= 191) {
            classB.push(ip)
        } else if (firstOctet >= 192 && firstOctet <= 223) {
            classC.push(ip)
        }
        // anything outside 1-223 (like 0, 127, 224-255) is Class D/E/reserved — skipped
    })

    // Write each class array into its file, one IP per line
    //! fs.writeFile(path, data, callback) — writes Class A IPs into A.txt
    //? aFilePath          → full path of the file to write to
    //? classA.join("\n")  → converts the array back into one string, one IP per line
    //? (err) => {}        → callback confirming success/failure of the write
    //*─────────────────────────────────────────────────────────────*
    fs.writeFile(aFilePath, classA.join("\n"), (err) => {
        if (err) console.log("Error writing A.txt:", err)
        else console.log(`A.txt written with ${classA.length} IPs.`)
    })

    //! fs.writeFile(path, data, callback) — writes Class B IPs into B.txt
    //? bFilePath          → full path of the file to write to
    //? classB.join("\n")  → converts the array back into one string, one IP per line
    //? (err) => {}        → callback confirming success/failure of the write
    //*─────────────────────────────────────────────────────────────*
    fs.writeFile(bFilePath, classB.join("\n"), (err) => {
        if (err) console.log("Error writing B.txt:", err)
        else console.log(`B.txt written with ${classB.length} IPs.`)
    })

    //! fs.writeFile(path, data, callback) — writes Class C IPs into C.txt
    //? cFilePath          → full path of the file to write to
    //? classC.join("\n")  → converts the array back into one string, one IP per line
    //? (err) => {}        → callback confirming success/failure of the write
    //*─────────────────────────────────────────────────────────────*
    fs.writeFile(cFilePath, classC.join("\n"), (err) => {
        if (err) console.log("Error writing C.txt:", err)
        else console.log(`C.txt written with ${classC.length} IPs.`)
    })
})