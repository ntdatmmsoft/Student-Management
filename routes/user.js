const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // do something here
    res.send('Hello User page');
   
})
module.exports = router;