const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27018";
const dbName = "Students_Managements"; //tạo collections
const client = new MongoClient(url);
const db = {};

async function connectToDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to Database");
  const database = client.db(dbName);
  db.students = database.collection("Students");

  // the following code examples can be pasted here...

  return "done.";
}

module.exports = { connectToDb, db };
