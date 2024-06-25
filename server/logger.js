const fs = require("fs");

const initLogger = () => {
  const logFile = fs.existsSync("log.txt")
    ? fs.openSync("log.txt", "a")
    : fs.openSync("log.txt", "w");

    const log = (requestName , targetPath , requestBody = "") => {
        const logMessage = `${new Date().toISOString()} ${requestName} ${targetPath} ${requestBody}\n`;
        fs.write(logFile, logMessage, () => {});
        };
    

  return { log };
};


module.exports = { initLogger };