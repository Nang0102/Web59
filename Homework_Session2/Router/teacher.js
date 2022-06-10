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
  // teacher.push({
  //   id: req.body.id,
  //   name: req.body.name,
  //   job: req.body.job,
  // }
  // );
  const { id, name, job } = req.body;
  if (!name) {
    name = "deafault name";
  }
  teacher.push({
    id: id,
    name: name,
    job: job,
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

// teacherRouter.delete("/:id", (req, res) => {
//   teacher.splice(req.params.id, 1);
//   res.json(teacher);
//   res.json("Hello from teacher router");
// });
let array1 = ["code", "source", { name: "website" }];
let popped = array1.pop();
console.log(array1, popped);

module.exports = teacherRouter;

// push: thêm phần tử vào cuối mảng
// pop : xóa phần tử cuối mảng
// pop() removes the last element of an array.
// push() adds an element to the end of an array.
// shift() removes the first element.  loại bỏ phần tử đầu tiên
// unshift() adds an element to the beginning of the array.thêm một phần tử vào đầu mảng
