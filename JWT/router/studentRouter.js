const express = require("express");
const studentRouter = express.Router();
const Students = require("../constant/student");

studentRouter.get("/", (req, res) => {
  res.json(Students);
});

studentRouter.put("/", (req, res) => {
  if (req.userRole !== "teacher") {
    res.json("Unauthorized");
    res.status(401);
    return;
  }
  console.log("Hello");
});
module.exports = studentRouter;
