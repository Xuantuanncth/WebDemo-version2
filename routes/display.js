var express = require('express');
var isUserLogin = require('./users')
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('Login: ', isUserLogin.isUserLogin)
    if (isUserLogin.isUserLogin == true) {
        res.render('Display/temperature');
    } else {
        console.log('User no login')
    }
})

module.exports = router;