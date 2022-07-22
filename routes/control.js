var express = require('express');
var router = express.Router();
let db = require('../db');

//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
//  Load data from Database:                           :    ok
//  Load status form Database:                         :    ok
//  Insert Status form front_end to Database:          :    ok
//  Insert Ranger setting form front_end to DataBase:  :    ok
//  Send status to device:                             :    no
//  Send Ranger Setting to device:                     :    no
//=============================//====================================//

router.get('/', function(req, res, next) {
    console.log("request: ", req.session)
        // res.render('Control/Control', { isLogin: true, autoCtr: false });
    if (req.session.userId) {
        res.render('Control/Control', { isLogin: true, autoCtr: false });
    } else {
        console.log('User no login')
        res.send("Please Login")
    }
})

router.get('/loadConfig', (req, res) => {
    try {
        const getData = db.get('deviceStatus').value();
        if (getData) {
            console.log("GetData: ", getData[0].value);
            res.status(200).send(getData);
        } else {
            res.status(500).send({
                autoControl: true,
                bom_status: true,
                oxi_status: true,
                so_status: true,
                suoi_status: true,
                oxi_range: [20, 50],
                duc_range: 30,
                ph_range: [20, 30],
                temp_range: [25, 35]
            });
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

function updateData(select, id, data) {
    // console.log("Update data ==========> 1 ");
    db.get(select).find({ id: id }).assign({ value: data }).write();
}

function createData(select, id, data) {
    // console.log("createData ===========> ")
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