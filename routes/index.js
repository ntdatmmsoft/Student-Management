const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // do something here
    res.send('Hello index');
   
})
module.exports = router;