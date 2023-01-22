const express = require("express");
const {
  getAllNews,
  getANews,
  getNewsCategoryWise,
} = require("../controllers/newsController");

// Routs
const newsRoute = express.Router();

newsRoute.route("/").get(getAllNews);
newsRoute.route("/:id").get(getANews);
newsRoute.route("/category/:id").get(getNewsCategoryWise);

module.exports = newsRoute;
