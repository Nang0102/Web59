const express = require("express");

const studentRouterHw = express.Router();

const Student = [
  {
    id: 1,
    name: "Tai",
    age: 14,
  },
  {
    id: 2,
    name: "Minh",
    age: 14,
  },
  {
    id: 3,
    name: "Nghia",
    age: 15,
  },
];

studentRouterHw.get("/student", (req, res) => {
  res.send(Student);
});
module.exports = studentRouterHw;
