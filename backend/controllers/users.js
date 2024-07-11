const usersRouter = require("express").Router();
const User = require("../models/user");
const logger = require("../utils/logger").initLogger();

usersRouter.use((req, res, next) => {
    logger.log(req.method, req.url, req.body);
    next();
  });

usersRouter.post("/user", async (req, res) => {
  const userData = req.body.post;
  const saltRounds = 10;
  const ph = await bcrypt.hash(userData["password"], saltRounds);
  await User.create({
    name: userData["name"],
    email: userData["email"],
    username: userData["username"],
    passwordHash: ph,
  })
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add user"));
});

usersRouter.post("/login", async (req, res) => {
  const { un, pw } = req.body.post;
  const saltRounds = 10;
  const ph = await bcrypt.hash(pw, saltRounds);
  const user = await User.findOne({ username: un, passwordHash: ph });
  user
    ? res
        .status(201)
        .send({ token: "token", name: user["name"], email: user["email"] })
    : res.status(500).send(`can't login to user: ${un}`); //Todo: return uniqe token
});

module.exports = usersRouter;