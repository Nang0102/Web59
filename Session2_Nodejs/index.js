const express = require("express");
// const res = require("express/lib/response");
const app = express();
const studentsRouter = require("./Router/students");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json({ extended: true }));
// app.get("/students", (req, res) => {
//   res.send(students);
// });

// // nên dùng: res.json hơn là res.send
// app.get("/", (req, res) => {
// const helloString= "hello"
//   res.json(helloString);
// });
//  do res.send === res.json

// get: để lấy về dữ liệu. Post
//  Thêm phần tử vào mảng
// app.post("/students/add", (req, res) => {
//   //   students.push({
//   //     id: 6,
//   //     name: "Anh",
//   //   });
//   res.status(201); //để update status của  response khi thường server bị lỗi sẽ update đc
//   res.json(students);
// });

// app.put("/students", (req, res) => {
//   students[1].name = "Thao";
//   res.json(students);
// });

app.get("/home", (req, res) => {
  res.send("This is Home Page!");
});

app.use("/students", studentsRouter); // để có thể sử dụng Router ở ben ngoài

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
