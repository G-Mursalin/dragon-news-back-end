const express = require("express");
const {
  createABookmark,
  deleteABookmark,
  getAllBookmarks,
} = require("../controllers/bookmarksController");

// Routs
const bookmarksRoute = express.Router();

bookmarksRoute.route("/:user_id").get(getAllBookmarks);
bookmarksRoute.route("/").post(createABookmark);
bookmarksRoute.route("/:user_id/:news_id").delete(deleteABookmark);

module.exports = bookmarksRoute;
