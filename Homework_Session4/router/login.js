const express = require("express");
const films = require("../constants/fimls");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../constants/users");

loginRouter.post("/", (req, res, next) => {
  console.log("this is request body", req.body);
  const msgBody = req.body;

  // Check req body có nằm trong mảng user không?
  const index = user.findIndex((el) => {
    return el.name === req.body.name && el.id === req.body.id;
  });

  const isUnthorize = index < 0;
  if (isUnthorize) {
    res.json(" user is not existed ");
    res.status(401);
    return;
  }

  const token = jwt.sign(msgBody, "PRIVATE_KEY");
  res.json({ token: token });

  next();
});

module.exports = loginRouter;
