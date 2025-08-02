const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  specialization: String,
});

module.exports = mongoose.model("Doctor", StaffSchema);
