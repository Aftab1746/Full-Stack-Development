const express = require('express');
const app = express();
const PORT = 5000;

//! app.use(callback) — request logger middleware, writes every request to a log file
//? callback(req, res, next): req.method/req.path build the log line; fs.appendFile adds it to test.txt without erasing previous logs; next() passes control forward
//*───────────────────────────────────────────*
const fs = require("fs");
app.use((req, res, next) => {
    const message = `${new Date().toISOString()}  ${req.method}  ${req.path} \n`
    fs.appendFile("test.txt", message, (err, data) => {
        if (err) {
            console.log("Error: ", err)
        }
        else {
            console.log("Log written to file")
        }
    })
    next();
})

let countRequests = 0;

//! app.use(callback) — request counter middleware, tracks total requests since server start
//? callback(req, res, next): countRequests is declared OUTSIDE this function so it persists across requests instead of resetting each time; next() passes control forward
//*───────────────────────────────────────────*
app.use((req, res, next) => {
    countRequests++;
    console.log(`Requests : ${countRequests}`)
    next();
})

//app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies

//! app.use(path, router) — mounts all user routes under /api/users
//? routes/userRoutes.js handles GET, POST, PUT, PATCH, DELETE for users; paths there are relative ("/" and "/:id"), Express prepends "/api/users" automatically
//*───────────────────────────────────────────*
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//! app.listen(port, callback) — Starts the server
//? port: PORT (5000) — which port the server listens on
//? callback(): runs once the server successfully starts, used here to log a confirmation message
//*───────────────────────────────────────────*
app.listen(PORT, () => {
    console.log(`Server listen at http://localhost:${PORT}`)
})