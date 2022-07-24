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

router.get('/loadData', (req, res) => {
    console.log('Load config');
    res.send({
        temp: 25,
        ph: 3,
        oxi: 50,
        duc: 20
    })
});

router.put('/updateData', (req, res) => {
    console.log("==============> Device Connect: ", req.body);
    res.send("Ok");
})

module.exports = router;