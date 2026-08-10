const fs = require("fs");
const path = require("path")
const express = require('express');
const app = express();
const users = require("./MOCK_DATA.json")
const PORT = 4000;
const fileName = "MOCK_DATA.json";
const filePath = path.join(__dirname, fileName)

//app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies

//! app.get(path, callback) — GET all users
//? path: "/api/users" — the route this handler listens on
//? callback(req, res): req = incoming request, res = response object used to send data back
//*───────────────────────────────────────────*
app.get("/api/users", (req, res) => {
    res.status(200).json(users)
})

//! app.route(path) — groups multiple HTTP methods under one shared path
//? path: "/api/users/:id" — :id is a dynamic route param, captured into req.params.id
//*───────────────────────────────────────────*
app.route("/api/users/:id")

    //! .get(callback) — Read single user by id
    //? callback(req, res): req.params.id holds the id from the URL; res sends back the matched user or a 404
    //*───────────────────────────────────────────*
    .get((req, res) => {
        const userID = Number(req.params.id)
        const user = users.find(user => userID === user.id)
        if (!user) {
            res.status(404).send("User not Found.")
        }
        else {
            res.status(200).json(user)
        }
    })

    //! .post(callback) — Create a new user
    //? callback(req, res): req would carry the new user's data in req.body (not yet implemented); res confirms status
    //*───────────────────────────────────────────*
    .post((req, res) => {
        res.status(200).send({ status: "Pending" })
    })

    //! .put(callback) — Replace a user by id entirely
    //? callback(req, res): req.params.id identifies which user; req.body must carry the full replacement data (old fields not in body are discarded)
    //*───────────────────────────────────────────*
    .put((req, res) => {
        const userId = Number(req.params.id)
        const index = users.findIndex(user => user.id === userId)

        if (index === -1) {
            return res.status(404).send("Record Not Found")
        }
        const { id, ...body } = req.body;
        users[index] = { id: userId, ...body }

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.log("Error: ", err)
                return res.status(500).send({ status: "Error Writing File" })
            }
            else {
                return res.status(200).send({ status: "Success", user: users[index] })
            }
        })
    })

    //! .delete(callback) — Delete a user by id
    //? callback(req, res): req.params.id identifies which user; res confirms deletion and returns the removed user
    //*───────────────────────────────────────────*
    .delete((req, res) => {
        const userId = Number(req.params.id)
        const index = users.findIndex(user => user.id === userId)

        if (index === -1) {
            return res.status(404).send("User Not Found")
        }

        const deletedUser = users[index]   // remember what's being removed, before removing it
        users.splice(index, 1)             // actually remove it from the array

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.log("Error: ", err)
                return res.status(500).send({ status: "Error Writing File" })
            }
            else {
                return res.status(200).send({ status: "Success", user: deletedUser })
            }
        })
    })

    //! .patch(callback) — Partially update a user by id
    //? callback(req, res): req.params.id identifies which user; req.body would carry only the changed fields; res confirms status
    //*───────────────────────────────────────────*
    .patch((req, res) => {
        const userId = Number(req.params.id)
        const index = users.findIndex(user => user.id === userId)
        if (index === -1) {
            return res.status(404).send("User not Found.")
        }
        const { id, ...body } = req.body;
        users[index] = { ...users[index], ...body }

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.log("Error: ", err);
                return res.status(500).send("Error Writing File");
            }
            res.status(200).json({ status: "success", user: users[index] });
        });
    })

//! app.post(path, callback) — Create a new user in user collection
//? callback(req, res): req.body carries the new user's data; res confirms creation and returns the new user with generated id
//*───────────────────────────────────────────*
app.post("/api/users", (req, res) => {
    const body = req.body;
    const newUser = { id: users.length + 1, ...body }
    users.push(newUser);
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log("Error: ", err)
            return res.status(500).send({ status: "Error Writing File" })
        }
        else {
             return res.status(201).send({status: "Success", user: newUser})
        }
    })
})


//! app.listen(port, callback) — Starts the server
//? port: PORT (4000) — which port the server listens on
//? callback(): runs once the server successfully starts, used here to log a confirmation message
//*───────────────────────────────────────────*
app.listen(PORT, () => {
    console.log(`Server listen at http://localhost:${PORT}`)
})