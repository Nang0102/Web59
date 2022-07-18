const express = require("express");
const jwt = require("jsonwebtoken");
const authMdw = require("../jwt");
const router = express.Router();

const teachers = [
  { name: "Aclice" },
  { name: "Bob" },
  { name: "Cris" },
  { name: "Dadbe" },
];

router.get("/", authMdw, (req, res) => {
  res.json(teachers);
});

router.post("/", (req, res) => {
  console.log(req.headers);

  const token = req.headers.authorization;
  const jwtString = token.split(" ")[1]; // cắt phần tử đc ngăn bởi dấu cách và phần phần tử thứ 2 là [1]
  jwt.verify(jwtString, "MY_PRIVATE_KEY", (err, decoded) => {
    if (!err) {
      console.log(decoded);
      res.json(teachers);
    } else;
    {
      console.log(err);
      res.status(401).send(err.message);
    }
  });
  res.json(teachers);
});

module.exports = router;
//encrypt: giai ma, ma hoa, decrypt
//encode: chuyen ma,decoded: sau khi
