const express = require("express");
const cors = require("cors");
const app = express();
const categoriesRoute = require("./routes/categoriesRoute");
const newsRoute = require("./routes/newsRoute");
const AppError = require("./utils/appError");
const { globalErrorController } = require("./controllers/errorController");

//Middleware
app.use(express.json());
app.use(cors());

//Routs
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/news", newsRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't not fine ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorController);

module.exports = app;
