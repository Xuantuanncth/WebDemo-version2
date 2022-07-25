//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
//  Load data from Database:                           :    Ok
//  Store data form device :                           :    Ok
//=============================//====================================//

var express = require('express');
var router = express.Router();
let db = require('../db');

let _data = [];

router.get('/', function(req, res, next) {
    res.render('Chart/Chart', { isLogin: true });
    // if (req.session.userId) {
    //     res.render('Chart/Chart', { isLogin: true });
    // } else {
    //     console.log('User no login')
    //     res.send("Please Login")
    // }
})

router.put('/storeData', (req, res) => {
    console.log("==============> Device Connect: ", req.body);
    _data = {
        hour: req.body.time + "h",
        value: {
            temp: req.body.temp,
            oxi: req.body.oxi,
            pH: req.body.pH,
            duc: req.body.duc
        }
    };
    updateData(req.body.date, req.body.day, _data);
    res.send("Ok");
})

router.get('/loadTimeConfig', (req, res) => {
    console.log("Start load config");
    let value = db.get('dataSensor').value();
    res.status(200).send(value);
})

function createData(date, day, data) {
    console.log("Create Data ========> ");
    db.get('dataSensor').push({
        date: date,
        day: day,
        data: [data]
    }).write();

}

function updateData(in_date, in_day, in_value) {
    try {
        let value = db.get('dataSensor').find({ date: in_date }).value();
        if (value) {
            value.data.push(in_value);
            console.log("Data update: ", value);
            db.get('dataSensor').find({ date: in_date }).assign({ data: value.data }).write();
            return 1
        } else {
            let isCreateData = createData(in_date, in_day, in_value);
            return isCreateData;
        }
    } catch (error) {
        console.log("Error: ", error);
        return 0;
    }
}

module.exports = router;