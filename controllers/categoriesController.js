const { catchAsync } = require("../utils/catchAsync");
const Category = require("./../models/categoryModel");

// Handlers
const getAllCategories = catchAsync(async (req, res) => {
  const categories = await Category.find();
  res.status(200).send({ status: "success", data: { categories } });
});

module.exports = {
  getAllCategories,
};
