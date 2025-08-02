const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");

router.get("/", async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
});

router.post("/", async (req, res) => {
  const staffMember = new Staff(req.body);
  await staffMember.save();
  res.json(staffMember);
});

router.put("/:id", async (req, res) => {
  const updated = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ message: "Staff deleted" });
});

module.exports = router;
