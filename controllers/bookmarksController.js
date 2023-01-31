const { default: mongoose } = require("mongoose");
const Bookmark = require("../models/bookmarkModel");
const { catchAsync } = require("../utils/catchAsync");

const getAllBookmarks = catchAsync(async (req, res) => {
  const bookmarks = await Bookmark.find({ user_id: req.params.user_id }).sort({
    _id: -1,
  });
  res.status(200).send({ status: "success", data: { bookmarks } });
});

const createABookmark = catchAsync(async (req, res) => {
  const isBookmarked = await Bookmark.findOne(req.body);
  if (isBookmarked) {
    res.status(201).send({
      status: "Already Bookmarked",
      data: { bookmark: null },
    });
  } else {
    const newBookmark = await Bookmark.create(req.body);
    res.status(201).send({
      status: "Bookmark saved successfully",
      data: { bookmark: newBookmark },
    });
  }
});

const deleteABookmark = catchAsync(async (req, res, next) => {
  const bookmark = await Bookmark.findOneAndDelete(req.params);
  res
    .status(201)
    .send({ status: "Successfully removed bookmark", data: { bookmark } });
});

module.exports = { createABookmark, deleteABookmark, getAllBookmarks };
