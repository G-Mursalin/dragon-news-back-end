const dotenv = require("dotenv");
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Shutting down....");
  process.exit(1);
});
const app = require("./app");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5000;

// *************************************

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Shutting down....");
  server.close(() => {
    process.exit(1);
  });
});
