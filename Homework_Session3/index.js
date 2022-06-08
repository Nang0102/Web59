const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const studentRouterHw = require("./homework/RouterHw/student_homework");
const teacherRouterHw = require("./homework/RouterHw/teacher_homework");
const subjectRouterHw = require("./homework/RouterHw/subject_homwork");
const LMwHomework = require("./homework/middlewareHw/logging_middleware");
const userMiddleware = require("./homework/middlewareHw/User_middleware");
const countObjectMw = require("./homework/middlewareHw/countObject_middleware");

app.use(bodyParser.json({ extended: true }));

app.use(
  "/student",
  LMwHomework,
  userMiddleware,
  studentRouterHw,
  countObjectMw
);
app.use(
  "/teacher",
  LMwHomework,
  userMiddleware,
  teacherRouterHw,
  studentRouterHw,
  countObjectMw
);
app.use(
  "/subject",
  LMwHomework,
  userMiddleware,
  subjectRouterHw,
  studentRouterHw,
  countObjectMw
);

app.listen(port, (err) => {
  if (err) {
    return;
  }
  console.log(`Application is running on ${port} `);
});
