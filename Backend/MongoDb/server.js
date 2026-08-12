const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./routes/userRoutes.js")
const PORT = 8000;

//! mongoose.connect(uri) — connects to the local MongoDB server
//? uri: "mongodb://127.0.0.1:27017/crudDatabase" — local MongoDB instance, database named "crudDatabase" (created automatically on first write)
//*───────────────────────────────────────────*
mongoose.connect("mongodb://127.0.0.1:27017/crudDatabase")
.then(() => {
    console.log("Database connected successfully")
})
.catch((err) => {
    console.log("Database connection failed", err)
})

//! app.use(path, router) — mounts all user routes under /api/users
//? routes/userRoutes.js handles GET, POST, PUT, PATCH, DELETE for users; paths there are relative ("/" and "/:id"), Express prepends "/api/users" automatically
//*───────────────────────────────────────────*
app.use("/api/users", router);

//! app.listen(port, callback) — Starts the server
//? port: PORT (8000) — which port the server listens on
//? callback(): runs once the server successfully starts, used here to log a confirmation message
//*───────────────────────────────────────────*
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})