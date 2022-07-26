//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
//  Load data from Database:                           :    ok
//  Load status form Database:                         :    ok
//  Insert Status form front_end to Database:          :    ok
//  Insert Ranger setting form front_end to DataBase:  :    ok
//  Send status to device:                             :    ok
//  Send Ranger Setting to device:                     :    ok
//=============================//====================================//

var express = require('express');
var router = express.Router();
let db = require('../db');

router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
        //res.render('Control/Control', { isLogin: true, autoCtr: false });
    if (req.session.userId) {
        res.render('Control/Control', { isLogin: true, autoCtr: false });
    } else {
        console.log('User no login')
        res.send("Please Login")
    }
})

router.get('/getAuto', (req, res) => {
    console.log('GetAuto ======================> ');
    const getData = db.get('deviceStatus').value();
    if (getData) {
        getData.forEach(element => {
            if (element.id == "auto") {
                let auto = element.value ? "1" : "0";
                return res.status(200).send(auto);
            }
        });
    } else {
        console.log('Data not found');
        res.status(200).send(0);
    }

})

router.get('/getDevice', (req, res) => {
    console.log("Req.query:", req.query.value);
    const getData = db.get('deviceStatus').value();
    if (getData) {
        getData.forEach(element => {
            if (element.id == req.query.value) {
                let data = element.value ? "1" : "0";
                return res.status(200).send(data);
            }
        });
    } else {
        res.status(200).send("0");
    }

})

router.get('/ranger', (req, res) => {
    console.log("Req.query:", req.query.value);
    let data;
    const getData = db.get('deviceRanger').value();
    if (getData) {
        if (req.query.value == 'oxi') {
            data = sortData(getData, "oxiRangeMax", "oxiRangeMin");
        } else if (req.query.value == 'temp') {
            data = sortData(getData, "tempRangeMax", "tempRangeMin");
        } else if (req.query.value == 'ph') {
            data = sortData(getData, "pHRangeMax", "pHRangeMin");
        } else if (req.query.value == 'duc') {
            data = sortData(getData, "ducRangeMax", "");
        } else {
            return res.send('incorrect parameter');
        }
        res.status(200).send(data);
    } else {
        res.status(500).send("Not found");
    }
})

function sortData(data, rangerMax, rangerMin) {
    let max, min;
    data.forEach(element => {
        if (element.id == rangerMax) {
            max = element.value;
        } else if (element.id == rangerMin) {
            min = element.value;
        } else {
            // Nothing to do
        }
    });
    return { max, min }
}
router.get('/loadConfig', (req, res) => {
    try {
        const getData = db.get('deviceStatus').value();
        if (getData) {
            console.log("GetData ===========> ", getData);
            res.status(200).send(getData);
        } else {
            res.status(500).send([]);
        }
    } catch (error) {
        res.status(500).send(error)
    }

});

router.put('/sendConfig', (req, res) => {
    console.log("Put setting: ", req.body.select)
    try {
        const getData = db.get(req.body.select).find({ id: req.body.id }).value();
        if (getData) {
            console.log("Data is: ", getData);
            updateData(req.body.select, req.body.id, req.body.value);
        } else {
            console.log("Can not find data");
            createData(req.body.select, req.body.id, req.body.value);
        }
        res.status(200).send("ok");
    } catch (error) {
        console.log("Db error");
        res.status(500).send(error);
    }

})

router.put('/asyncButton', (req, res) => {
    console.log("asyncButton =========> ", req.body);
    res.send("OK");
})

function updateData(select, id, data) {
    db.get(select).find({ id: id }).assign({ value: data }).write();
}

function createData(select, id, data) {
    db.get(select).push({
        id: id,
        value: data
    }).write()
}

function checkData(data) {
    if (isNaN(data)) {
        if ((data > 0)) {
            console.log("Start Time: ", data);
        } else {
            alert("Data should be greater than 0 ")
        }
    } else {
        alert("Data must be number ")
    }
}

module.exports = router;