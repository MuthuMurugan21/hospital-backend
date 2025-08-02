import mongoose from "mongoose";
import Nurse from "./Nurse";

const nurseSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  contact: String,
});

const Nurse = mongoose.models.Nurse || mongoose.model("Nurse", nurseSchema);

export default Nurse;
