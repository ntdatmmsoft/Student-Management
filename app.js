var MongoClient = require('mongodb').MongoClient;
const url = require('./app/db_config');
const express = require('express');
const app = express();
var index = require('./routes/index.js');

app.listen(3000, function () {
    console.log('listening on 3000')
})
app.use('/', index);
//set up pug engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// let marks = [
//     { Math: 8, History: 9, Education: 10 },
//     { Math: 7, History: 8, Education: 8 },
//     { Math: 2, History: 2, Education: 3 }
// ];
// let students = [
//     { name: 'Anna' }, { name: 'Ben' }, { name: 'Josh' },
// ];
// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//     let dbo = db.db('StudentManagement');
//     let STUDENT = dbo.collection('Student');
//     let MARK = dbo.collection('Mark');
//     let updateMarks = [];
//     let ids = [];
//     //let updateValue = { $set: { Math: 5, History: 5, Education: 5, name: 'Josh' } };
//     MARK.find().toArray((err, data) => {
//         for (let i in data) {
//             let markUpdate = {
//                 Math: data[i].Math,
//                 History: data[i].History,
//                 Education: data[i].Education,
//                 name: students[i].name
//             };
//             updateMarks.push(markUpdate);
//             ids.push(data[i]._id);
//         }
//         console.log('UpdateMarks:', updateMarks);
//         console.log('IDS', ids);
//     });
//     STUDENT.find().toArray((err,student)=>{
//         console.log('Student',student);
//     })
    // for (let i = 0; i < ids.length; i++) {
    //     console.log('ID::',ids[i]);
    //     console.log('MarkUpdate::',markUpdate[i]);
    //     dbo.collection('Mark').update({ _id: ids[i] }, { $set: markUpdate[i] }, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             console.log('Updated');
    //         }
    //     })
    // }