const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const User = require("../constants/user");

loginRouter.post("/", (req, res) => {
  console.log("this is request", req.body);
  const msgBody = req.body;
  const index = User.findIndex((el) => {
    return el.name === req.body.name && el.password === req.body.password;
  });
  const isUnthorize = index < 0;

  if (isUnthorize) {
    res.json("user is not existted");
    res.status(401);
    return;
  }

  const tocken = jwt.sign(msgBody, jwtKey);
  res.json({ token: tocken });
});

module.exports = loginRouter;
