const Student = [
  {
    id: 1,
    name: "Tai",
    age: 14,
  },
  {
    id: 2,
    name: "Minh",
    age: 14,
  },
  {
    id: 3,
    name: "Nghia",
    age: 15,
  },
];
const studentMiddlewareHw =
  ("/",
  (req, res, next) => {
    console.log("hi", req.body);
    res.json("hello");
    next();
  });
module.exports = studentMiddlewareHw;
