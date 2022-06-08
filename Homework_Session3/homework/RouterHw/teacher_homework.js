const express = require("express");
const teacherRouterHw = express.Router();

const Teacher = [
  {
    id: 1,
    name: "Dung",
    age: 30,
  },
  {
    id: 2,
    name: "Dai",
    age: 29,
  },
  {
    id: 3,
    name: "Quan",
    age: 25,
  },
];

teacherRouterHw.get("/", (req, res, next) => {
  res.json(Teacher);
  next();
});
teacherRouterHw.post("/", (req, res, next) => {
  res.json(Teacher);
  next();
});

module.exports = teacherRouterHw;
