const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://hoanganh:hoanganh123456@cluster0.nzqzp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "User_management";
const db = {};

async function connectToDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const database = client.db(dbName);
  // const database = db.collection("User");

  db.users = database.collection("User");

  // the following code examples can be pasted here...

  return "done.";
}

module.exports = { connectToDb, db };
