const admins = require("../constants/admins");
const guests = require("../constants/guests");
const members = require("../constants/members");

const addRole = (arr, role) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].role = role;
  }
  return arr;
};

addRole(admins, "admin");
addRole(guests, "guest");
addRole(members, "member");

const user = admins.concat(guests.concat(members));

module.exports = user;

//  trả ra kqua:
// // [
//   {
//     "id": 1,
//     "name": "Hoai",
//     "role": "admin"
// },
// {
//     "id": 2,
//     "name": "Kiem",
//     "role": "admin"
// },
// {
//     "id": 1,
//     "name": "Nghia",
//     "role": "guest"
// },
// {
//     "id": 2,
//     "name": "Toan",
//     "role": "guest"
// },
// {
//     "id": 1,
//     "name": "Hai Anh",
//     "role": "member"
// },
// {
//     "id": 2,
//     "name": "Hanh",
//     "role": "member"
// }]
