const express = require("express");
const { getAllCategories } = require("../controllers/categoriesController");

// Routs
const categoriesRoute = express.Router();

categoriesRoute.route("/").get(getAllCategories);

module.exports = categoriesRoute;
