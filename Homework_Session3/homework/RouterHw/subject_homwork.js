const express = require("express");
const subjectRouterHw = express.Router();

const Subject = [
  {
    id: 1,
    name: "Toan",
  },
  {
    id: 2,
    name: "Van",
  },
  {
    id: 3,
    name: "Anh",
  },
];

subjectRouterHw.post("/", (req, res, next) => {
  res.send(Subject);
  next();
});

module.exports = subjectRouterHw;
