const express = require("express");

const LoggingMiddleware = (req, res, next) => {
  console.log("New request at ", new Date());
  next();
};

module.exports = LoggingMiddleware;
