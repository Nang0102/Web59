const express = require("express");
const studentsRouter = express.Router();

const students = [
  {
    id: 1,
    name: "Hai",
  },
  {
    id: 2,
    name: "Hanh",
  },
  {
    id: 3,
    name: "Hung",
  },
  {
    id: 4,
    name: "Hang",
  },
];

studentsRouter.get("/students", (req, res) => {
  console.log("this is request client");
  res.json(students);
});

studentsRouter.post("/", (req, res) => {
  res.json(students);
});

module.exports = studentsRouter;
