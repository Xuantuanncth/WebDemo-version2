var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.userId) {
        res.render('index', { title: "Dash Board", isLogin: true });
    } else {
        res.render('index', { title: "Dash Board", isLogin: false });
        // res.render('index');
    }
});

module.exports = router;