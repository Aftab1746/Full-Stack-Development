const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.use(express.urlencoded({ extended: true }))

//! router.get(path, callback) — GET all users
//? path: "/" — becomes "/api/users" once mounted in server.js
//*───────────────────────────────────────────*
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//! router.post(path, callback) — Create a new user
//? callback(req, res): req.body carries new user data; User.create() validates against the schema (required fields, unique email) before saving
//*───────────────────────────────────────────*
router.post('/', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newUser = await User.create({ first_name, last_name, email, password });
        res.status(201).json(newUser);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: "Email already in use" });
        }
        res.status(500).json({ error: err.message });
    }
});

//! router.route(path) — groups multiple HTTP methods under one shared path
//? path: "/:id" — becomes "/api/users/:id" once mounted
//*───────────────────────────────────────────*
router.route('/:id')

    //! .get(callback) — Read a single user by MongoDB _id
    //? callback(req, res): req.params.id is the MongoDB document _id; User.findById() looks it up directly
    //*───────────────────────────────────────────*
    .get(async (req, res) => {
        const userId = req.params.id;
        try {
            const specifiedUser = await User.findById(userId);
            if (!specifiedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(specifiedUser);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })

    //! .put(callback) — Replace a user entirely by id
    //? callback(req, res): req.body must carry the full replacement data; returnDocument:'after' returns the updated document, not the old one
    //*───────────────────────────────────────────*
    .put(async (req, res) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Body required" });
        }
        const userId = req.params.id;
        const { first_name, last_name, email, password } = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(userId, { first_name, last_name, email, password }, { returnDocument: 'after' });
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            if (err.code === 11000) {
                return res.status(409).json({ error: "Email already in use" });
            }
            res.status(500).json({ error: err.message });
        }
    })

    //! .patch(callback) — Partially update a user by id
    //? callback(req, res): req.body is passed AS-IS (only fields the client actually sent) so unmentioned fields stay untouched, unlike .put()
    //*───────────────────────────────────────────*
    .patch(async (req, res) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Body required" });
        }
        const userId = req.params.id;

        try {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, { returnDocument: 'after' });
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            if (err.code === 11000) {
                return res.status(409).json({ error: "Email already in use" });
            }
            res.status(500).json({ error: err.message });
        }
    })

    //! .delete(callback) — Delete a user by id
    //? callback(req, res): User.findByIdAndDelete() removes the document; confirms deletion in the response
    //*───────────────────────────────────────────*
    .delete(async (req, res) => {
        const userId = req.params.id;
        try {
            const deletedUser = await User.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

module.exports = router;