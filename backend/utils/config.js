require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

module.exports = {
  MONGODB_CONNECTION_URL,
  PORT,
};
