// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // to parse JSON

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI);
//   // {
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true
//   // })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB error:", err));

// // Route test
// app.get("/", (req, res) => {
//   res.send("Hospital Backend Running...");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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


