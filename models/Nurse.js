const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema({
  name: String,
  shift: String,
  contact: String
});

module.exports = mongoose.model("Nurse", nurseSchema);
