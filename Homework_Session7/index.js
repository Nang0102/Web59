const express = require("express");
const app = express();
const port = 3000;
const { connectToDb, db } = require("./db");
const userRouter = require("./router/user");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello");
  console.log("databse", db);
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectToDb();
});
