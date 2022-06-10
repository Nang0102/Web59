const express = require("express");
const studentRouter = express.Router();
const Students = require("../constants/student");

studentRouter.get("/", (req, res) => {
  console.log("this is request client");
  res.json(Students);
});

studentRouter.put("/", (req, res) => {
  if (req.userRole !== "teacher") {
    res.json("unathorized");
    res.status(401);
    return;
  }

  // lấy update và lấy thông tin ng dùng: sửa thông tin của user, lấy tt từ body
  const messageBody = req.body;
  //sau đó dùng hàm finđIndex tìm trong amngr user có id trùng với id mafmình gửi lên và update hàm đó
  const index = Students.findIndex((el) => {
    return req.body.id === el.id;
  });
  Students[index].grade = req.body.grade;
  console.log("Hello");
  res.json(Students);
});

module.exports = studentRouter;
