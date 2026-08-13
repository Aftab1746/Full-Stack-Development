const express = require("express");
//! express.Router()
//? no parameters - creates a mini Express app just for routing
const studentRouter = express.Router();
//*──────────────────────────────────────────────────────────*

const {
  findAllStudents,
  findStudentById,
  createNewStudent,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/studentController");

//! studentRouter.get(path, handler)
//? path - "/" matches the base "/api/students" URL
//? handler - findAllStudents, function that runs for this route
studentRouter.get("/", findAllStudents);

//! studentRouter.post(path, handler)
//? path - "/" matches the base "/api/students" URL
//? handler - createNewStudent, function that runs for this route
studentRouter.post("/", createNewStudent);
//*──────────────────────────────────────────────────────────*

//! studentRouter.get(path, handler)
//? path - "/:id" matches "/api/students/<id>", id available via req.params.id
//? handler - findStudentById, function that runs for this route
studentRouter.get("/:id", findStudentById);

//! studentRouter.patch(path, handler)
//? path - "/:id" matches "/api/students/<id>", id available via req.params.id
//? handler - updateStudentById, function that runs for this route
studentRouter.patch("/:id", updateStudentById);

//! studentRouter.delete(path, handler)
//? path - "/:id" matches "/api/students/<id>", id available via req.params.id
//? handler - deleteStudentById, function that runs for this route
studentRouter.delete("/:id", deleteStudentById);
//*──────────────────────────────────────────────────────────*

module.exports = studentRouter;