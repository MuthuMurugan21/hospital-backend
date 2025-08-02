const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Doctor = require("../models/DoctorModel");

const JWT_SECRET = process.env.JWT_SECRET || "hospital_secret_key";

exports.loginDoctor = async (req, res) => {
  const { username, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ username });
    if (!doctor) return res.status(401).json({ message: "Invalid username" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: doctor._id, role: "doctor" }, JWT_SECRET, { expiresIn: "2h" });

    res.json({ token, name: doctor.name });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err });
  }
};
