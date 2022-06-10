const fs = require("fs");
const content = "Hello, world!";

// const Timeout = () => {
//   arlert("Hi,you!");
// };
// setTimeout(() => {
//   console.log("sayHello");
// }, 10000);

// Để bắt đầu ghi ra file ta sd funciton writeFile của fs:

fs.writeFile("Mindxs.txt", content, (err) => {
  //tạo file "Mindxs.txt" ở thư mục hiện tại với nội dung "Hello, world"
  if (err) {
    console.err(err);
  }
});

// để đọc dữ liệu trong file ta sd funcion khác của fs là readFile:

// const fs = require("fs");
fs.readFile("Mindxs.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// const { sum, sub, div } = require("./cusom_module/math");
// console.log(div(2, 3));

// const { express } = require("./exppress_session1");

// HOMEWORK:  CRUD: create, read, update, delete

// Creat

const Teacher = {
  data: [
    {
      id: 0,
      name: "Huong",
      Gender: "F",
    },
    {
      id: 1,
      name: "Hai",
      Gender: "M",
    },
    {
      id: 2,
      name: "Hoa",
      Gender: "F",
    },
    {
      id: 3,
      name: "Hanh",
      Gender: "M",
    },
  ],
};
fs.writeFileSync("./teacher.json", JSON.stringify(Teacher));

// read:

fs.readFile("./teacher.json", "utf8", (err, data) => {
  if (err) {
    console.err(err);
    return;
  }
  console.log(data);
});

// update

const data = fs.readFileSync("./teacher.json");
const teacher = JSON.parse(data); // lấy data ra để convert thư viện ra arr bt để xử lí

// Teacher["data"].splice(1, 2);
Teacher["data"].splice(1, 1, {
  id: 5,
  name: "Hanh",
  Gender: "M",
});
fs.writeFileSync("./teacher.json", JSON.stringify(Teacher));

// Delete

fs.unlink("./Mindxs.txt", (err) => {
  if (err) throw err;

  console.log("File Mindxs.txt deleted");
});
