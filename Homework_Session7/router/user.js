const express = require("express");
const { db } = require("../db");
const userRouter = express.Router();
const Users = require("../users.json");

// Thêm 1 user
userRouter.post("/", async (req, res) => {
  const { ID, Class, Name, Role } = req.body;
  const respond = await db.users.insertOne({ ID, Class, Name, Role });
  res.status(201);
  res.json(respond);
});

// Thêm nhiều user
userRouter.post("/add-many", async (req, res) => {
  try {
    const respond = await db.users.insertMany(req.body.data);
    res.status(201);
    res.json(respond);
  } catch (error) {
    res.status(500);
    res.json("Some thing went wrong!");
  }
});

// Get dl student

userRouter.get("/", async (req, res) => {
  try {
    const { role } = req.headers;
    let users;
    if (role) {
      users = await db.users
        .find({
          role,
        })
        .toArray();
    }
  } catch (error) {}
});

module.exports = userRouter;
