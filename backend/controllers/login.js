const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const logger = require("../utils/logger").initLogger();
const bcrypt = require("bcrypt");
const User = require("../models/user");

loginRouter.use((req, res, next) => {
  logger.log(req.method, req.originalUrl, req.body);
  next();
});

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body.user;

  const user = await User.findOne({ username });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response
    .status(200)
    .send({ token, name: user.name, email: user.email });
});

module.exports = loginRouter;
