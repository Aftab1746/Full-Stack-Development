# Node.js Modules

Practiced how to split code into separate files and reuse them using require and module.exports.

## Files in this folder

- math.js — exports an add function
- greeting.js — exports greetMorning and greetEvening functions
- temperture.js — exports temperature conversion functions
- app.js — main file, imports and uses all of the above

## What I understood

require is how you pull in code from another file. No need to add .js at the end, Node adds it automatically.

module.exports is how a file shares its code with other files. Whatever you put inside it becomes available wherever that file is required.

Every file being required with "./filename" must sit in the same folder as the file requiring it, otherwise you get a Cannot find module error.

If you don't export something, it stays private to that file.

## Mistakes I ran into

Tried running app.js from the wrong folder and got Cannot find module errors.
Forgot that objects exported with multiple functions need to be called like object.functionName(), not just as a single function.