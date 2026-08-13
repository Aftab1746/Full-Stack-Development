const mongoose = require("mongoose");

//! async () => {}
//? no parameters - reads MONGO_URI from process.env internally
const connectDB = async () => {
  try {
    //! mongoose.connect(uri)
    //? uri - process.env.MONGO_URI, the MongoDB connection string from .env
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully.");
  } catch (err) {
    console.log("Error while connecting to MongoDB:", err.message);
  }
};
//*──────────────────────────────────────────────────────────*

module.exports = connectDB;