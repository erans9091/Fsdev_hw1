const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const logger = require("../utils/logger").initLogger();

usersRouter.use((req, res, next) => {
  logger.log(req.method, req.originalUrl, req.body);
  next();
});

usersRouter.post("/", async (req, res) => {
  const { name, email, username, password } = req.body.user;

  const saltRounds = 10;

  const passwordHash = await bcrypt.hash(password, saltRounds);
  await User.create({
    name,
    email,
    username,
    passwordHash,
  })
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add user"));
});

// usersRouter.post("/login", async (req, res) => {
//   const { un, pw } = req.body.post;
//   const saltRounds = 10;
//   const ph = await bcrypt.hash(pw, saltRounds);
//   const user = await User.findOne({ username: un, passwordHash: ph });
//   user
//     ? res
//         .status(201)
//         .send({ token: "token", name: user["name"], email: user["email"] })
//     : res.status(500).send(`can't login to user: ${un}`); //Todo: return uniqe token
// });

module.exports = usersRouter;
