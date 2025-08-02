const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  contact: String,
  address: String,
  medicines: [String], // list of medicine names
  injections: [String] // list of injections
});

module.exports = mongoose.model("Patient", patientSchema);
