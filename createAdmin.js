const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/AdminModel");

mongoose.connect("mongodb+srv://Murugan:Muru12@cluster0.dlyyrkd.mongodb.net/hospitalDB?retryWrites=true&w=majority")
  .then(async () => {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const admin = new Admin({ username: "admin", password: hashedPassword });
    await admin.save();
    console.log("Admin created");
    process.exit();
  });
