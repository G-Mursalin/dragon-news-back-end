const mongoose = require("mongoose");

//Schema
const categorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please gives a ID"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please tell news Name"],
    unique: true,
    lowercase: true,
  },
});

// Model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
