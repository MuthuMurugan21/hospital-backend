const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

router.get("/", async (req, res) => {
  const meds = await Medicine.find();
  res.json(meds);
});

router.post("/", async (req, res) => {
  const med = new Medicine(req.body);
  await med.save();
  res.json(med);
});

router.put("/:id", async (req, res) => {
  const updated = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: "Medicine deleted" });
});

module.exports = router;
