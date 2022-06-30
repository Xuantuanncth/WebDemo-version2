var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.userId) {
        res.render('home', { title: "Dash Board", isLogin: true });
    } else {
        res.render('home', { title: "Dash Board", isLogin: false });
    }
});

module.exports = router;