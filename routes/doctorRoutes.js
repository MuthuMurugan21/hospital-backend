const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// Get all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Add a doctor
router.post("/", async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.json(doctor);
});

// Update a doctor
router.put("/:id", async (req, res) => {
  const updated = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a doctor
router.delete("/:id", async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: "Doctor deleted" });
});

module.exports = router;
