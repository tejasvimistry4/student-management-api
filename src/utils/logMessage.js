const logMessage = (currentTime, method, url) => {
  console.log(`[${currentTime}] ${method} ${url}`);
};

module.exports = logMessage;
