const express = require("express");
const app = express();
const filmRouter = require("./router/filmRouter");
const loginRouter = require("./router/login");
const user = require("./constants/users");
const authenMdw = require("./middleware/authen_middleware");
const requireAPIKey = require("./constants/api");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.post("/user", (req, res) => {
  const api_key = req.query.api_key;
  if (api_key) {
    res.json(user);
  } else {
    res.send("API key is missing");
  }
});
app.use("/film", filmRouter);

app.use("/login", authenMdw, loginRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
