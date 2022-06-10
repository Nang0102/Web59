const express = require("express");
const userRouter = express.Router();

userRouter.post((req, res) => {
  res.json("this is request");
});

module.exports = userRouter;
