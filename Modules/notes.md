# Node.js Modules

Today I learned how modules work in Node.js. Basically, instead of writing all your code in one huge file, you can split it into smaller files and reuse them wherever needed using require and module.exports.

## How it works

I created a file called math.js which has a simple add function. Instead of keeping this function private to that file, I exported it using module.exports so other files can use it too.

math.js

    const add = (x, y) => {
        return x + y
    }

    module.exports = { add }

Then in app.js, I imported that function using require and used it.

app.js

    const total = require("./math")
    console.log(total.add(10, 20))

Output: 30

## What I understood

require is how you pull in code from another file. You don't need to add .js at the end, Node figures that out automatically.

module.exports is how a file shares its code with the outside world. Whatever you put inside the exports object is what other files get access to when they require it.

If you don't export something, it stays private to that file and can't be used anywhere else.

## Why this is useful

This makes code much easier to manage. Instead of one massive file with everything in it, you can organize your project into logical pieces, like keeping all math-related functions in one file, and just import them wherever needed.