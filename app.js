const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const categoriesRoute = require("./routes/categoriesRoute");
const newsRoute = require("./routes/newsRoute");
const AppError = require("./utils/appError");
const { globalErrorController } = require("./controllers/errorController");
const bookmarksRoute = require("./routes/bookmarkRoute");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/image", express.static("image"));

// Image Upload
let imageName = "";
const storage = multer.diskStorage({
  destination: path.join("./image"),
  filename: function (req, file, cb) {
    imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

const upload = multer({
  storage: storage,
}).single("image");

app.post("/upload-image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(201).send({
        success: false,
      });
    } else {
      return res.status(201).send({
        success: true,
        url: "http://localhost:5000/image/" + imageName,
      });
    }
  });
});

//Routs
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/news", newsRoute);
app.use("/api/v1/bookmarks", bookmarksRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't not fine ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorController);

module.exports = app;
