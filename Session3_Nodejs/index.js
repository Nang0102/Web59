const express = require("express");
const studentsRouter = require("./Router/students");
const app = express();
const port = 3000;
const studentMiddleware = require("./middleware/student_middleware");
const LoggingMiddleware = require("./middleware/logging_middleware");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(morgan("combined"));
app.use(bodyParser.json({ extended: true }));
app.use("/students", LoggingMiddleware, studentMiddleware, studentsRouter);

app.get("/teacher", LoggingMiddleware, (req, res) => {
  console.log("New request at ", new Date());
  res.send("Success");
});
app.get("/class", LoggingMiddleware, (req, res) => {
  console.log("New request at ", new Date());
  res.send("Success");
});

app.use(express.static("assests"));

app.listen(port, (err) => {
  if (err) {
    return;
  }
  console.log(`Application is running on ${port} `);
});
