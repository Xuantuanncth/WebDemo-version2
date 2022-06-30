var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

});

// router.get('/search',function(req,res,next){
//   console.log("search: ",req.query);
//   var nameq = req.query.name;
//   var nameMatcher = db.get('users').value().filter(function(user){ //loc
//     return user.name.indexOf(nameq) !== -1;
//   })
//   console.log("nameMacher: ",nameMatcher),
//   res.render('User/index',{user:nameMatcher});
// });

router.get('/register', function(req, res, next) {
    res.render('Users/register');
});

router.get('/login', function(req, res, next) {
    res.render('Users/login')
});

router.post('/user/register', function(req, res, next) {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/');
});

router.post('/user/login', function(req, res, next) {
    console.log("User login: ", req.body);
    var uname_req = req.body.username;
    var pass_req = req.body.password;
    var nameMatcher = db.get('users').value().filter(function(user) {
        return user.username.indexOf(uname_req) !== -1;
    });
    var passMatcher = db.get('users').value().filter(function(user) {
        return user.password.indexOf(pass_req) !== -1;
    });
    if (nameMatcher && passMatcher) {
        req.session.userId = uname_req;
        console.log(req.session)
        res.redirect('/');
    } else {
        console.log("Password or Username Error")
        res.send("Invalid user name or password")
    }
});

module.exports = router;