const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management API is Running",
  });
});

app.get("/error", (req, res, next) => {
  next(new Error("This is a fake error for testing."));
});

app.use("/students", studentRoutes);
app.use(errorHandler);

module.exports = app;
