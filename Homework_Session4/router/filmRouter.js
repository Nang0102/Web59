const express = require("express");
const filmRouter = express.Router();
const fimls = require("../constants/fimls");

//  Tất cả đèu có thể truy cập vào phim.
filmRouter.get("/", (req, res) => {
  // console.log("this is request client");
  if (userRole === "guest") {
    res.json(fimls.filter((el) => el.type === "free"));
  }
  {
    res.json(fimls);
  }
});

// filmRouter.put("/", (req, res) => {
//   res.json(fimls);
// });

module.exports = filmRouter;
