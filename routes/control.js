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

router.get('/loadConfig', (req, res) => {
    console.log("Req.query: ", req.query);
    res.send({
        autoControl: false,
        bom_status: true,
        oxi_status: true,
        so_status: true,
        suoi_status: true,
        oxi_range: [20, 50],
        duc_range: 30,
        ph_range: [20, 30],
        temp_range: [25, 35]
    })
});

module.exports = router;