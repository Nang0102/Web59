// la 1 function để nhận  request và trong đó chứa thông tin của mã jwt

const jwt = require("jsonwebtoken");
const Users = require("../constant/user");

function authenMdw(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  let decode;
  try {
    decode = jwt.verify(token, "MY_PRIVATE_KEY");
  } catch (err) {
    res.json(err.message);
    res.status(401);
    return;
  }
  if (decode) {
    const index = Users.findIndex((el) => {
      return decode.name === el.name && decode.password === el.password;
    });
    if (index < 0) {
      res.json("User is not existed");
      res.status(401);
      return;
    }
    req["userRole"] = Users[index].role; // Khi đã tìm đc user(ở hàm const index) thi mình sẽ sửa. "Bản thân req là 1 object thì mình sẽ cho nó 1 thuộc tính "userRole". Khi req pass sang student thì sẽ khai thêm 1 router(StudentRouter.put)
    next();
  } else {
    res.json("jwt is invalid");
    res.status(401);
    return;
  }
}

module.exports = authenMdw;
