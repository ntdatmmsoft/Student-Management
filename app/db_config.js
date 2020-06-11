//var MongoClient = require('mongodb').MongoClient;
const DBUrl = "mongodb+srv://admin:123@cluster0-cr5lz.gcp.mongodb.net/StudentManagement?retryWrites=true&w=majority";

// module.exports = MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//   if (err) { throw err; }
//   console.log("Connection succesfully");
//   const dbo = db.db('StudentManagement');
//   return dbo;
// });

module.exports = DBUrl;
