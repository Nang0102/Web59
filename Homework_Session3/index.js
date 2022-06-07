const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const studentRouterHw = require("./homework/RouterHw/student_homework");
const teacherRouterHw = require("./homework/RouterHw/teacher_homework");
const subjectRouterHw = require("./homework/RouterHw/subject_homwork");
const LMwHomework = require("./homework/middlewareHw/logging_middleware");
const studentMiddlewareHw = require("./homework/middlewareHw/student_middlewareHw");

app.use(bodyParser.json({ extended: true }));

app.use("/student", LMwHomework, studentMiddlewareHw, studentRouterHw);
app.use("/teacher", LMwHomework, teacherRouterHw);
app.use("/subject", LMwHomework, subjectRouterHw);

app.listen(port, (err) => {
  if (err) {
    return;
  }
  console.log(`Application is running on ${port} `);
});
