var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
    if (req.session.userId) {
        res.render('Display/temperature');
    } else {
        console.log('User no login')
        res.send("Error user name or password")
    }
})

module.exports = router;