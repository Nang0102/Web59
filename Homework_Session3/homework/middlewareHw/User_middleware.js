const User = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

const userMiddleware = (req, res, next) => {
  console.log("This is request from body", req.body);

  const index = User.findIndex(
    (el) => JSON.stringify(el) === JSON.stringify(req.body)
  );
  const isUnauthorize = index < 0;
  if (isUnauthorize) {
    res.status(401);
    res.send("Unauthorized");
    return;
  }
  next();
};
module.exports = userMiddleware;
