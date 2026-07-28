const logMessage = require("../utils/logMessage");

const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();

  logMessage(currentTime, req.method, req.originalUrl);

  next();
};

module.exports = logger;
