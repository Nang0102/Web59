const express = require("express");
const app = express();
const port = 3000;
const { connectToDb, db } = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello");
  console.log("databse", db);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const respond = await db.users.findOne(req.body);
  res.status(200);
  res.json(respond);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectToDb();
});
