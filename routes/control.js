var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
    res.render('Control/Control', { isLogin: true, autoCtr: false });
    // if (req.session.userId) {
    //     res.render('Control/Control', { isLogin: true, autoCtr: false });
    // } else {
    //     console.log('User no login')
    //     res.send("Please Login")
    // }
})

module.exports = router;