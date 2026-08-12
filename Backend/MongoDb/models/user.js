//! mongoose.Schema — defines the required shape of a User document
//? first_name/last_name: required strings
//? email: required, unique (no two users can share an email), validated against a basic email-format regex
//? password: required string (plaintext here — hashing with bcrypt is a future improvement, not yet implemented)
//*───────────────────────────────────────────*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
});

//! mongoose.model(name, schema) — turns the schema into a usable model
//? "User" — the model name; Mongoose auto-pluralizes this to the "users" collection in MongoDB
//*───────────────────────────────────────────*
module.exports = mongoose.model('User', userSchema);