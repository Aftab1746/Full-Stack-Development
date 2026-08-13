const express = require("express");
require("dotenv").config();

const connectDB = require("./connections/db");
const studentRouter = require("./routes/studentRouter");

//! express()
//? creates the Express application instance
const app = express();
const PORT = process.env.PORT || 5000;

//! app.use(middleware)
//? middleware - function that parses incoming request bodies before routes receive them
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//*──────────────────────────────────────────────────────────*

//! connectDB()
//? no parameters - opens the MongoDB connection using MONGO_URI from .env
connectDB();
//*──────────────────────────────────────────────────────────*

//! app.use(path, router)
//? path - base URL prefix ("/api/students") applied to every route inside studentRouter
//? router - the studentRouter instance handling matched requests
app.use("/api/students", studentRouter);
//*──────────────────────────────────────────────────────────*

//! app.listen(port, callback)
//? port - PORT variable, the port number the server binds to
//? callback - function run once the server starts successfully
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
//*──────────────────────────────────────────────────────────*