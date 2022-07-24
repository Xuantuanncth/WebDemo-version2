var express = require('express');
var router = express.Router();

//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
//  Load data from Database:                           :    No
//  Store data form device :                           :    No
//=============================//====================================//


router.get('/', function(req, res, next) {
    res.render('Chart/Chart', { isLogin: true });
    // if (req.session.userId) {
    //     res.render('Chart/Chart', { isLogin: true });
    // } else {
    //     console.log('User no login')
    //     res.send("Please Login")
    // }
})

router.get('/updateData', (req, res) => {
    console.log("==============> Device Connect: ", req.body);
    res.send("Ok");
})

module.exports = router;