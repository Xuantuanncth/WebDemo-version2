var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
    res.render('Display/temperature', { isLogin: true });
    // if (req.session.userId) {
    //     res.render('Display/temperature', { isLogin: true });
    // } else {
    //     console.log('User no login')
    //     res.send("Please Login")
    // }
})

module.exports = router;