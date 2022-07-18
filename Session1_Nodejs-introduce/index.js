// function HelloWorld() {
//   function timeout() {
//     setTimeout(() => {
//       console.log("timeout");
//     }, 10000);
//   }
//   console.log("1");
//   timeout();

//   console.log("2");
//   console.log("3");
//   console.log("4");
// }
// HelloWorld();

//là một modul (file system) để import dữ liệu. Hàm readfile là hàm định sẵn
const fs = require("fs");
const { sum, sub } = require("./cusom_module/math");

// fs.readFile("./Mindx.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error of fs function", err);
//   }
//   console.log("data:", data);
// });

// CRUD: create, delete, update, read

const data = fs.readFileSync("./studentshw7.json");
const studentshw7 = JSON.parse(data); // lấy data ra để convert thư viện ra arr bt để xử lí

studentshw7.forEach((student, index) => {
  if (index % 2 === 0) {
    student["role"] = "admin";
  } else {
    student["role"] = "student";
  }
  student["Password"] = "ThisisPassword123";
});

// const newStudent = {
//   id: 2,
//   name: "Nga",
//   gender: "F",
// };
// students["data"].push(newStudent);

// students["data"].splice(1, 1); //xóa phần tử số 1 ở vtri số 1

// trả nggược lại dữ liệu trong file

// console.log("data:", JSON.parse(data));

// console.log(sum(1, 2));
// const newStudents = {
//   data: [
//     {
//       id: 1,
//       name: "toan",
//       Gender: "M",
//     },
//   ],
// };
fs.writeFileSync("./studentshw7.json", JSON.stringify(studentshw7));
