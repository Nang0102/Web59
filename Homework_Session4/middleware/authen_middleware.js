const jwt = require("jsonwebtoken");

function authenMdw(req, res, next) {
  next();
  res.json("");
}
module.exports = authenMdw;
