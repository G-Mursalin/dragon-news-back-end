const mongoose = require("mongoose");

//Schema
const newsSchema = new mongoose.Schema({
  others_info: {
    is_todays_pick: Boolean,
    is_trending: Boolean,
  },
  category_id: {
    type: String,
    required: [true, "Please gives a Category-ID"],
    trim: true,
  },
  rating: {
    number: {
      type: Number,
      default: 1,
      min: [1, "Rating must be 1.0 or above 1.0"],
      max: [5, "Rating must be 5.0 or below 5.0"],
    },
    badge: { type: String, enum: ["Excellent"] },
  },
  total_view: { type: Number, default: 0, min: 0 },
  title: { type: String, required: [true, "A news must have a title"] },
  author: {
    name: { type: String, required: [true, "News should have an author name"] },
    published_date: {
      type: Date,
      required: [true, "News should have an published date"],
    },
    img: {
      type: String,
      required: [true, "Author should have picture URL"],
    },
    thumbnail_url: [String],
    image_url: {
      type: String,
      required: [true, "News should have an image"],
    },
    details: { type: String, required: [true, "News should have a details"] },
  },
});

// Model
const News = mongoose.model("News", newsSchema);

module.exports = News;
