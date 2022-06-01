const express = require("express");
const app = express();
const port = 3000;

const students = [
  {
    id: 1,
    name: "Hai",
  },
  {
    id: 2,
    name: "Ha",
  },
  {
    id: 3,
    name: "Anh",
  },
];

// app.get('/'), (req, res)=>{
//     res.send('Hello, world')
// }

app.get("/"),
  (req, res) => {
    const helloString = "Hello";
    res.json("students"); //===res.send(json)
  };
app.post("/student"),
  (req, res) => {
    students.push({
      id: 4,
      name: "Hai Anh",
    });
    console.log(abc);
    res.json("students"); //===res.send(json)
  };

app.get("/home"),
  (req, res) => {
    const helloString = "Hello";
    res.json("this is home"); //===res.send(json)
  };

app.listen();
