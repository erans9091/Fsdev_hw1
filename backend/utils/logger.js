const fs = require("fs");

const initiated = false;

let logFile;

const initLogger = () => {
  if (!initiated) {
    logFile = fs.openSync("log.txt", "w");
  }

  const log = (requestName, targetPath, requestBody = "") => {
    requestBody && Object.keys(requestBody).length === 0 && (requestBody = "");
    const logMessage = `${new Date().toISOString()} ${requestName} ${targetPath} ${
      requestBody && JSON.stringify(requestBody)
    }\n`;
    fs.write(logFile, logMessage, () => {});
  };

  return { log };
};

module.exports = { initLogger };
