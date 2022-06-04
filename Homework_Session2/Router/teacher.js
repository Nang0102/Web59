const express = require("express");
const teacherRouter = express.Router();

const teacher = [
  {
    id: 1,
    name: "Tuan",
    job: "teacher",
  },
  {
    id: 2,
    name: "Minh",
    job: "teacher",
  },
  {
    id: 3,
    name: "Vu",
    job: "teacher",
  },
];

// Tao method GET ==> return ve mang teacher
teacherRouter.get("/", (req, res) => {
  // console.log(" This is request from client", req);
  res.json(teacher);
});

// Tao method POST ==> them phan tu vao mang teacher

teacherRouter.post("/", (req, res) => {
  // console.log("This is request body", req.body);
  teacher.push({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
  });
  console.log("This is request body", req.body);
  res.status(200);
  res.json(teacher);
});

// PUT ==> update phan tu 2 ==> name : Khai, job: "teacher-supporter"

teacherRouter.put("/:id", (req, res) => {
  (teacher[req.params.id].name = req.query.name),
    (teacher[req.params.id].job = req.query.job);
  console.log("Log params", req.query);
  res.json(teacher);
});

// DELETE xoa phan tu cuoi cung trong mang teacher

teacherRouter.delete("/:id", (req, res) => {
  teacher.splice(req.params.id, 1);
  res.json(teacher);
  res.json("Hello from teacher router");
});

module.exports = teacherRouter;
