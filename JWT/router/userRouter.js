const express = require("express");
const userRouter = express.Router();
const Users = require("../constant/user");

userRouter.get("/", (req, res) => {
  res.json(Users);
});

module.exports = userRouter;
