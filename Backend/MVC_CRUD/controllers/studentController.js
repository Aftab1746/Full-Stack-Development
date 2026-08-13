const StudentModel = require("../models/studentModel");

// GET all students
//! async (req, res) => {}
//? req - incoming request object
//? res - response object used to send data back
const findAllStudents = async (req, res) => {
  try {
    //! StudentModel.find(filter)
    //? filter - {} means no filter, returns every document
    const students = await StudentModel.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//*──────────────────────────────────────────────────────────*

// GET single student by id
//! async (req, res) => {}
//? req - incoming request object, carries params.id
//? res - response object used to send data back
const findStudentById = async (req, res) => {
  try {
    //! StudentModel.findById(id)
    //? id - req.params.id, the :id segment from the URL
    const student = await StudentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//*──────────────────────────────────────────────────────────*

// POST create new student
//! async (req, res) => {}
//? req - incoming request object, carries body with new student data
//? res - response object used to send data back
const createNewStudent = async (req, res) => {
  try {
    //! StudentModel.create(data)
    //? data - req.body, the JSON payload sent by the client
    const newStudent = await StudentModel.create(req.body);
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//*──────────────────────────────────────────────────────────*

// PATCH update student by id
//! async (req, res) => {}
//? req - incoming request object, carries params.id and body with fields to update
//? res - response object used to send data back
const updateStudentById = async (req, res) => {
  try {
    //! StudentModel.findByIdAndUpdate(id, update, options)
    //? id - req.params.id, the :id segment from the URL
    //? update - req.body, fields to change
    //? options - { new: true } returns the updated document instead of the original
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//*──────────────────────────────────────────────────────────*

// DELETE student by id
//! async (req, res) => {}
//? req - incoming request object, carries params.id
//? res - response object used to send data back
const deleteStudentById = async (req, res) => {
  try {
    //! StudentModel.findByIdAndDelete(id)
    //? id - req.params.id, the :id segment from the URL
    const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//*──────────────────────────────────────────────────────────*

module.exports = {
  findAllStudents,
  findStudentById,
  createNewStudent,
  updateStudentById,
  deleteStudentById,
};