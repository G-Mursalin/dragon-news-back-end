const mongoose = require("mongoose");

//Schema
const bookmarkSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  news_id: {
    type: String,
    required: [true, "Please gives a Category-ID"],
  },
  image_url: {
    type: String,
    required: [true, "News should have an image"],
  },
  details: { type: String, required: [true, "News should have a details"] },
  title: { type: String, required: [true, "A news must have a title"] },
});

// Model
const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
