const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoute = require("./routes/authRoute");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/nurses", require("./routes/nurseRoutes"));
app.use("/api/staff", require("./routes/staffRoutes"));
app.use("/api/medicines", require("./routes/medicineRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/auth", authRoute);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


