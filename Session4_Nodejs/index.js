const express = require("express");
const app = express();
const port = 3000;
const Students = require("./constants/student");
const User = require("./constants/user");
const bodyParser = require("body-parser");
const studentRouter = require("./router/studentRouter");
const loginRouter = require("./router/login");
const authenMdw = require("./middleware/authen_middleware");

app.get("/", (req, res) => {
  res.json(Students);
});

app.use(bodyParser.json({ extended: true }));

app.use("/student", authenMdw, studentRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
