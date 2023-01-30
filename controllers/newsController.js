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
  let category_news;
  if (req.params.id === "8") {
    category_news = await News.find();
  } else {
    category_news = await News.find({
      category_id: req.params.id,
    });
  }

  res.status(200).send({ status: "success", data: { category_news } });
});

const getTodaysPickNews = catchAsync(async (req, res) => {
  const todays_pick = await News.find({ "others_info.is_todays_pick": true });

  res.status(200).send({
    status: "success",
    data: { todays_pick },
  });
});

module.exports = {
  getAllNews,
  getANews,
  getNewsCategoryWise,
  getTodaysPickNews,
};
