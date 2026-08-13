const mongoose = require("mongoose");
//! new mongoose.Schema(definition)
//? definition - object describing each field's type, validation rules, and options
const studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true,
    trim: true,
  },
  father_name: {
    type: String,
    required: true,
    trim: true,
  },
  registration_No: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  isEnrolled: {
    type: Boolean,
    default: true,
  },
});
//*──────────────────────────────────────────────────────────*

//! mongoose.model(name, schema)
//? name - string, singular model name; Mongoose pluralizes it for the collection ("Student" -> "students")
//? schema - the studentSchema defined above, describing document shape
const StudentModel = mongoose.model("Student", studentSchema);
//*──────────────────────────────────────────────────────────*

module.exports = StudentModel;