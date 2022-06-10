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

studentsRouter.get("/", (req, res) => {
  // "/:id  lalf param"
  console.log("this is request from client", req.query.id); // vào postman gõ: (../students/?id) ra kqua hiển thị terminal
  res.json(students);
});

studentsRouter.post("/", (req, res) => {
  // students.push({
  //   id: req.body.id,
  //   name: req.body.name,
  // });

  // hoặc cách khác là:
  const { id, name } = req.body;
  students.push({
    id,
    name,
  });
  console.log("This is request body", req.body);
  res.status(201); //để update status của  response khi thường server bị lỗi sẽ update đc
  res.json(students);
});

studentsRouter.put("/:id", (req, res) => {
  students[req.params.id].name = "Thao";
  students[req.params.id].name = req.query.name;
  res.json(students);
});

studentsRouter.delete("/:id", (req, res) => {
  students.splice(req.params.id, 1);
  res.json(students);
  res.send("Hello from students router");
});

module.exports = studentsRouter;

// Get params: ==> truyền vào trong route ("/:id")
// Get query: ==> truyền vào trong  route ("?key=value")
