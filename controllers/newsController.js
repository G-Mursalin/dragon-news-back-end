const News = require("../models/newsModel");
const { catchAsync } = require("../utils/catchAsync");

// Handlers
const getAllNews = catchAsync(async (req, res) => {
  const news = await News.find();
  res.status(200).send({ status: "success", data: { news } });
});

const getANews = catchAsync(async (req, res) => {
  const oneNews = await News.findById(req.params.id);
  if (!oneNews) {
    return next(new AppError("No tour found with that ID", 404));
  }
  res.status(200).send({ status: "success", data: { oneNews } });
});

const getNewsCategoryWise = catchAsync(async (req, res) => {
  const category_news = await News.find({
    category_id: req.params.id,
  });

  res.status(200).send({ status: "success", data: { category_news } });
});

module.exports = {
  getAllNews,
  getANews,
  getNewsCategoryWise,
};
