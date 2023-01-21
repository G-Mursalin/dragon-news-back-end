const { catchAsync } = require("../utils/catchAsync");
const categories = require("./../dev-data/categories.json");

// Handlers
const getAllCategories = catchAsync((req, res) => {
  res.status(500).send(categories);
});

module.exports = {
  getAllCategories,
};
