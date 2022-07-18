const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../constant/user");
loginRouter.post("/", (req, res) => {
  console.log("req-body", req.body); // vao postman dien thong tin "name","password" roi an send de xem phan consolelog gui ve dung k
  const msgBody = req.body;

  //check req body cos nawfm trong mangr Users k?
  const index = Users.findIndex((el) => {
    // JSON.stringify(el) === JSON.stringify(req.body);
    return el.name === req.body.name && el.password === req.body.password;
  });
  const isUnauthorize = index < 0;
  if (isUnauthorize) {
    res.json("User is not existed");
    res.status(401);
    return;
  }

  const token = jwt.sign(msgBody, "MY_PRIVATE_KEY");
  res.json({
    token, // trả ra kết quả là dãy mã token
  });
});

module.exports = loginRouter;
