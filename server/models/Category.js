import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

export default mongoose.model("Category", CategorySchema);
