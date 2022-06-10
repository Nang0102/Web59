const express = require("express");
const app = express();
const teacherRouter = require("./Router/teacher");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json({ extended: true }));
app.get("", (req, res) => {
  res.json(teacher);
});

app.use("/teacher", teacherRouter);

app.listen(port, () => {
  console.log(`This is app listening on port ${port}`);
});
