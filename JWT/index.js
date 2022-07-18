const express = require("express");
const Students = require("./constant/student");
const Users = require("./constant/user");
// const authRouter = require("./auth");
// const teacherRouter = require("./tetacher");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const studentRouter = require("./router/studentRouter");
const loginRouter = require("./router/login");
const authenMdw = require("./middleware/authen_middleware");

app.use(bodyParser.json({ extended: true }));

app.use(express.json());

// app.use("/auth", authRouter);
// app.use("/teachers", teacherRouter);

// app.use("/student", student);

app.use("/student", authenMdw, studentRouter);
app.use("/user", authenMdw, userRouter);
app.use("/login", authenMdw, loginRouter);
app.listen(3000, () => {
  console.log("app is running at 3000");
});
