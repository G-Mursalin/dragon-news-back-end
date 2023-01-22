const categories = require("./../dev-data/categories.json");

// Handlers
const getAllCategories = (req, res) => {
  res.status(200).send(categories);
};

module.exports = {
  getAllCategories,
};
