const express = require("express");
const { ObjectId } = require("mongodb");
const studentRouter = express.Router();
const { db } = require("../dbconnect");

studentRouter.post("/", async (req, res) => {
  // console.log(req.body);

  const { name, rank } = req.body;

  const respond = await db.students.insertOne({ name: name, rank: rank });
  res.status(201); // mã 201 thường là mã trả vè thành công sử dụng cho phươgn thức post
  res.json(respond);
});

studentRouter.post("/add-many", async (req, res) => {
  try {
    const respond = await db.students.insertMany(req.body.data);
  } catch (error) {
    res.status(500);
    res.json("Some thing wrong");
  }

  // res.status(201);
  // res.json(respond);
});
studentRouter.get("/", async (req, res) => {
  try {
    // console.log(req);
    // const id = req.headers.id;
    // const name = req.headers.name;
    // const rank = req.headers.rank;
    const { id, rank, name } = req.headers;
    let students;
    if (id) {
      students = await db.students.findOne({ _id: new ObjectId(id) });
    } else if (name) {
      students = await db.students.find({ name: name }).toArray();
    } else if (rank) {
      students = await db.students
        .find({
          rank: Number(rank), //hoặc để convert rank từ string sang số thì sử dụng ccú pháp rank:+rank.
        })
        .toArray();
    } else {
      students = await db.students.find({}).toArray();
    }

    res.status(201);
    res.json(students);
  } catch (error) {
    res.status(500);
    res.json("some thing went wrong");
  }
});

studentRouter.put("", async (res, req) => {
  try {
    const id = req.headers.id;
    const body = req.body;
    const filter = {
      _id: new ObjectId(id),
    };
    const updateDoc = {
      $set: body,
    };
    const students = await db.students.updateOne(filter, updateDoc);

    res.status(201);
    res.json(students);
  } catch (error) {
    res.status(500);
    res.json("Some thing went wrong");
  }
});

module.exports = studentRouter;
