const express = require("express");
const router = express.Router();
const Nurse = require("../models/Nurse");

router.get("/", async (req, res) => {
  const nurses = await Nurse.find();
  res.json(nurses);
});

router.post("/", async (req, res) => {
  const nurse = new Nurse(req.body);
  await nurse.save();
  res.json(nurse);
});

router.put("/:id", async (req, res) => {
  const updated = await Nurse.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Nurse.findByIdAndDelete(req.params.id);
  res.json({ message: "Nurse deleted" });
});

module.exports = router;
