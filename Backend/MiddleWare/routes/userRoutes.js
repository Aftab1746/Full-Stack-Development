const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const users = require("../MOCK_DATA.json");
const filePath = path.join(__dirname, "..", "MOCK_DATA.json");

//! router.get(path, callback) — GET all users
//? path: "/" — becomes "/api/users" once mounted in the main file
//*───────────────────────────────────────────*
router.get("/", (req, res) => {
    res.status(200).json(users)
})

//! router.route(path) — groups multiple HTTP methods under one shared path
//? path: "/:id" — becomes "/api/users/:id" once mounted
//*───────────────────────────────────────────*
router.route("/:id")

    //! .get(callback) — Read single user by id
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

    //! .put(callback) — Replace a user by id entirely
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
    //*───────────────────────────────────────────*
    .delete((req, res) => {
        const userId = Number(req.params.id)
        const index = users.findIndex(user => user.id === userId)

        if (index === -1) {
            return res.status(404).send("User Not Found")
        }

        const deletedUser = users[index]
        users.splice(index, 1)

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
    //*───────────────────────────────────────────*
    .patch((req, res) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send({ error: "Body required" });
        }
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

//! router.post(path, callback) — Create a new user
//? path: "/" — becomes "/api/users" once mounted
//*───────────────────────────────────────────*
router.post("/", (req, res) => {
    const body = req.body;
    const newUser = { id: users.length + 1, ...body }
    users.push(newUser);
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log("Error: ", err)
            return res.status(500).send({ status: "Error Writing File" })
        }
        else {
            return res.status(201).send({ status: "Success", user: newUser })
        }
    })
})

module.exports = router;