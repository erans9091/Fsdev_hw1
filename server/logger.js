const fs = require("fs");

const initLogger = () => {
  const logFile = fs.openSync("log.txt", "w");

  const log = (requestName, targetPath, requestBody = "") => {
    const logMessage = `${new Date().toISOString()} ${requestName} ${targetPath} ${
      requestBody && JSON.stringify(requestBody)
    }\n`;
    fs.write(logFile, logMessage, () => {});
  };

  return { log };
};

module.exports = { initLogger };
