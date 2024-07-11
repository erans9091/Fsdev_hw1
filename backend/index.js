// Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

// Utils
// const logger = require("./logger").initLogger();
const config = require("./utils/config");
// const middleware = require("./utils/middleware");

// Routers
const notesRouter = require("./controllers/notes");
const usersRouter = require("./controllers/users");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

const { PORT, MONGODB_CONNECTION_URL } = config;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_CONNECTION_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("failed to connect to MongoDB!\n", error);
  });

app.use("/notes", notesRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("server is running!");
});

// app.use(middleware.requestLogger);
// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
