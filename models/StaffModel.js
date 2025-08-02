import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  contact: String,
});

const Staff = mongoose.models.Staff || mongoose.model("Staff", staffSchema);

export default Staff;
