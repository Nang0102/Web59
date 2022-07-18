const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const db = {};

async function ConnectToDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
 



  // the following code examples can be pasted here...

  return "done.";
}

module.exports = { ConnectToDb, db };
