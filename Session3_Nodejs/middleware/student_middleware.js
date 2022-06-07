const students = [
  {
    id: 1,
    name: "Hai",
  },
  {
    id: 2,
    name: "Hanh",
  },
  {
    id: 3,
    name: "Hung",
  },
  {
    id: 4,
    name: "Hang",
  },
];

const studentMiddleware = (req, res, next) => {
  console.log("req  from body", req.body);
  // const index = students.findIndex((el) => {
  //   el === req.body;
  // });
  const index = students.findIndex(
    (el) => JSON.stringify(el) === JSON.stringify(req.body)
  );

  // if index=== -1 student info k thuộc arr students
  // if index .=0 studetns info thuộc arr students

  // if (index>0)
  // {isUnauthorized= true}
  // else { isUnauthorized = false}
  const isUnauthorized = index < 0;
  if (isUnauthorized) {
    res.status(401);
    res.send("Unauthorized");
    return;
  }
  next();
  // res.send(students);
};

module.exports = studentMiddleware;
