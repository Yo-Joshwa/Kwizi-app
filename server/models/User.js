
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: String,
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);

