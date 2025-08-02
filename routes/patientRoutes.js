const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

router.post("/", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

router.put("/:id", async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: "Patient deleted" });
});

module.exports = router;
