var express = require('express');
var router = express.Router();
let db = require('../db');

//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
// Insert setting time form front_end to Database   :       Yes
// Load setting time form database to front_end     :       Yes
// Send setting time to device                      :       No
//=============================//====================================//


router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
        //res.render('Setting/SettingTime', { isLogin: true });
    if (req.session.userId) {
        res.render('Setting/SettingTime', { isLogin: true });
    } else {
        res.send("Please Login")
    }
})

router.get('/loadTimeConfig', (req, res) => {
    try {
        let value = db.get('settingTime').value();
        if (value) {
            res.status(200).send(value);
        } else {
            res.status(500).send('Can not find data');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/timesetting', (req, res) => {
    console.log("Get Setting time: ", req.query.value);
    try {
        let value = db.get('settingTime').value();
        if (value) {
            value.forEach(element => {
                if (element.id == req.query.value) {
                    let start = element.start;
                    let stop = element.stop;
                    return res.status(200).send({ start, stop });
                }
            });
        } else {
            res.status(500).send('Not found value');
        }
    } catch (error) {
        console.log("Error: ");
        res.status(500).send(error);
    }
})

router.put('/settingConfigTime', (req, res) => {
    console.log("Setting time: ==================> ", req.body);
    try {
        const getData = db.get('settingTime').find({ id: req.body.id }).value();
        if (getData) {
            updateData(req.body.id, req.body.start, req.body.stop);
        } else {
            createData(req.body.id, req.body.start, req.body.stop);
        }
        res.status(200).send("ok");
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send(error);
    }
})


function updateData(id, _start, _stop) {
    db.get('settingTime').find({ id: id }).assign({ start: _start, stop: _stop }).write();
}

function createData(id, _start, _stop) {
    db.get('settingTime').push({
        id: id,
        start: _start,
        stop: _stop
    }).write()
}

module.exports = router;