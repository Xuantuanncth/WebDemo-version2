var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('Chart/Chart', { isLogin: true });
    // if (req.session.userId) {
    //     res.render('Chart/Chart', { isLogin: true });
    // } else {
    //     console.log('User no login')
    //     res.send("Please Login")
    // }
})

module.exports = router;