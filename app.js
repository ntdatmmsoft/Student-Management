var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:123@cluster0-cr5lz.gcp.mongodb.net/StudentManagement?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) { throw err; }
    console.log("Database created!");
    let dbo = db.db('StudentManagement');
    // dbo.createCollection('Student', (result, err) => {
    //     if (err) {
    //         console.log("Error", err);
    //     }
    //     console.log("Collection created");
    // });
    let TestDB = db.db('sample_analytics');
    let accounts = TestDB.collection('accounts');
    accounts.find({}).toArray(function (err, result) {
        if (err) { throw err; }
        console.log('Data of Collection:', result);
        db.close();
    });
});