var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:<password>@cluster0-cr5lz.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});