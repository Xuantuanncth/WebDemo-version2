//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
//  Load data from Database:                           :    Ok
//  Store data form device :                           :    Ok
//=============================//====================================//

var express = require('express');
var router = express.Router();

let _temp = 0;
let _ph = 0;
let _oxi = 0;
let _duc = 0;


router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
        //res.render('Display/temperature', { isLogin: true });
    if (req.session.userId) {
        res.render('Display/temperature', { isLogin: true });
    } else {
        console.log('User no login')
        res.send("Please Login")
    }
})

router.get('/loadData', (req, res) => {
    console.log('Load config');
    res.send({
        temp: _temp,
        ph: _ph,
        oxi: _oxi,
        duc: _duc
    })
});

router.put('/updateData', (req, res) => {
    console.log("==============> Device Connect: ", req.body);
    _temp = req.body.temp;
    _ph = req.body.pH;
    _oxi = req.body.oxi;
    _duc = req.body.duc;
    res.send("Ok");
})

module.exports = router;