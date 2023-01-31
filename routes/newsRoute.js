const express = require("express");
const {
  getAllNews,
  getANews,
  getNewsCategoryWise,
  getTodaysPickNews,
  getTrendingNews,
} = require("../controllers/newsController");

// Routs
const newsRoute = express.Router();

newsRoute.route("/").get(getAllNews);
newsRoute.route("/todays-pick").get(getTodaysPickNews);
newsRoute.route("/trending").get(getTrendingNews);
newsRoute.route("/:id").get(getANews);
newsRoute.route("/category/:id").get(getNewsCategoryWise);

module.exports = newsRoute;
