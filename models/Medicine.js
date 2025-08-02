const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: String,
  brand: String,
  stock: Number,
  expiryDate: Date
});

module.exports = mongoose.model("Medicine", medicineSchema);
