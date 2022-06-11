const express = require("express");
const app = express();
const filmRouter = require("./router/filmRouter");
const loginRouter = require("./router/login");
const user = require("./constants/users");
const authenMdw = require("./middleware/authen_middleware");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.get("/user", (req, res) => {
  res.json(user);
});
app.use("/film", filmRouter);

app.use("/login", authenMdw, loginRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
