const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Step1: Buy a ticket
router.post("/login", (req, res) => {
  //todo: user check here first

  // create new token
  const token = jwt.sign(
    {
      username: req.body.username,
    },
    "MY_PRIVATE_KEY", // "MY_PRIVATE_KEY": giống như con dấu có sẵn trong ứng dụng của c.ta. sd khóa này để giải mã
    {
      expiresIn: 5 * 60, //token sẽ hết hạn trong bao lâu
    }
  );
  res.send(token);
});

module.exports = router;
