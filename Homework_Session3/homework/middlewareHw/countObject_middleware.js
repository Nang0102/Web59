const countObjectItem = [
  { user: "alice", student: 5, teacher: 1, subject: 0 },
  { user: "bob", student: 10, teacher: 1, subject: 8 },
  { user: "charlie", student: 0, teacher: 0, subject: 0 },
];

function countObjectMw(req, res, next) {
  console.log("req body", req.body);

  countObjectItem.forEach((element) => {
    if (element.user === req.body.username && req.baseUrl === "/student") {
      element.student++;
    } else if (
      element.user === req.body.username &&
      req.baseUrl === "/teacher"
    ) {
      element.teacher++;
    } else if (
      element.user === req.body.username &&
      req.baseUrl === "/subject"
    ) {
      element.subject++;
    }
  });
  console.log("hey", countObjectItem);
  next();
}
module.exports = countObjectMw;
