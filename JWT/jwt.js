const jwt = require("jsonwebtoken");

const authMdw = (req, res, next) => {
  //step2: check token
  const token = req.headers.authorization;
  const jwtString = token.split(" ")[1];
  jwt.verify(jwtString, "MY_PRIVATE_KEY", (err, decoded) => {
    if (err) {
      res.status(401).send(err.message);
    } else {
      next();
    }
  });
};

module.exports = authMdw;
