const news = require("./../dev-data/news.json");

// Handlers
const getAllNews = (req, res) => {
  res.status(200).send(news);
};

const getANews = (req, res) => {
  const selected_news = news.find((val) => val._id === req.params.id);

  res.status(200).send(selected_news);
};

const getNewsCategoryWise = (req, res) => {
  const category_news = news.filter((val) => val.category_id === req.params.id);

  if (category_news.length === 0) {
    res.status(200).send({ message: "No news to show" });
  } else {
    res.status(200).send(category_news);
  }
};

module.exports = {
  getAllNews,
  getANews,
  getNewsCategoryWise,
};
