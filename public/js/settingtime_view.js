//=============================//====================================//
//      Feature                                            Status
//-------------------------------------------------------------------//
// If Button setting = false => Can't config time   :       Yes
// Load TimeConfig form html                        :       Yes
// Send setting time to server                      :       Yes
//=============================//====================================//

$(function() {
    $('#datetimepicker1_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker1_off').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker2_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker2_off').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker3_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker3_off').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker4_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker4_off').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker5_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepicker5_off').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepickerAuto_on').datetimepicker({ format: 'HH:mm' });
});
$(function() {
    $('#datetimepickerAuto_off').datetimepicker({ format: 'HH:mm' });
});


let _bom_startTime = document.getElementById('bom_startTime');
let _bom_stopTime = document.getElementById('bom_stopTime');
let _oxi_startTime = document.getElementById('oxi_startTime');
let _oxi_stopTime = document.getElementById('oxi_stopTime');
let _loc_startTime = document.getElementById('loc_startTime');
let _loc_stopTime = document.getElementById('loc_stopTime');
let _so_startTime = document.getElementById('so_startTime');
let _so_stopTime = document.getElementById('so_stopTime');
let _maysuoi_startTime = document.getElementById('maysuoi_startTime');
let _maysuoi_stopTime = document.getElementById('maysuoi_stopTime');
let _auto_startTime = document.getElementById('auto_startTime');
let _auto_stoptTime = document.getElementById('auto_stopTime');
let _bomStatus = document.getElementById('btn_bomnuoc');

function settingTime(key) {
    switch (key) {
        case 1:
            console.log('Button checked: ', _bomStatus.checked);
            if (!_bomStatus.checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("maybom", _bom_startTime.value, _bom_stopTime.value);
            }
            break;
        case 2:
            console.log('btn_oxi checked: ', document.getElementById('btn_oxi').checked);
            if (!document.getElementById('btn_oxi').checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("bomoxi", _oxi_startTime.value, _oxi_stopTime.value);
            }
            break;
        case 3:
            console.log('btn_locnuoc checked: ', document.getElementById('btn_locnuoc').checked);
            if (!document.getElementById('btn_locnuoc').checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("locnuoc", _loc_startTime.value, _loc_stopTime.value);
            }
            break;
        case 4:
            console.log('btn_So checked: ', document.getElementById('btn_So').checked);
            if (!document.getElementById('btn_So').checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("sononglanh", _so_startTime.value, _so_stopTime.value);
            }
            break;
        case 5:
            console.log('btn_maysuoi checked: ', document.getElementById('btn_maysuoi').checked);
            if (!document.getElementById('btn_maysuoi').checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("maysuoi", _maysuoi_startTime.value, _maysuoi_stopTime.value);
            }
            break;
        case 6:
            console.log('btn_auto checked: ', document.getElementById('btn_auto').checked);
            if (!document.getElementById('btn_auto').checked) {
                alert('Please "ON" button setting');
            } else {
                updateData("auto", _auto_startTime.value, _auto_stoptTime.value);
            }
            break;
        default:
            break;
    }

}

function updateData(key, startTime, stopTime) {
    if (startTime && stopTime) {
        console.log('Start Time: ', startTime, " Stop Time: ", stopTime)
        sendConfig(key, startTime, stopTime);
    } else {
        alert(' Start Time or Stop Time must be different from 0 ')
    }
}

function sendConfig(key, startTime, stopTime) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: key, start: startTime, stop: stopTime })
    };
    const url = '/setting/settingConfigTime';
    fetch(url, requestOptions)
        .then(data => console.log("Data: ", data.statusText))
        .catch(error => console.log("Error: ", error))
}

window.onload = function loadTimeConfig() {
    console.log("load Time Config ");
    const url = '/setting/loadTimeConfig';
    fetch(url).then((response) => {
        console.log("Get local config");
        response.json().then((data) => {
            if (data.error) {
                console.log("Data error: ", data.error);
            } else {
                console.log("Data: ", data);
                parseDataConfig(data);
            }
        })
    })
}

function parseDataConfig(data) {
    data.forEach(element => {
        console.log("Element: ", element.id)
        if (element.id == 'maybom') {
            _bom_startTime.value = element.start;
            _bom_stopTime.value = element.stop;
        } else if (element.id == 'bomoxi') {
            _oxi_startTime.value = element.start;
            _oxi_stopTime.value = element.stop;
        } else if (element.id == 'locnuoc') {
            _loc_startTime.value = element.start;
            _loc_stopTime.value = element.stop;
        } else if (element.id == 'sononglanh') {
            _so_startTime.value = element.start;
            _so_stopTime.value = element.stop;
        } else if (element.id == 'maysuoi') {
            _maysuoi_startTime.value = element.start;
            _maysuoi_stopTime.value = element.stop;
        } else if (element.id == 'auto') {
            _auto_startTime.value = element.start;
            _auto_stoptTime.value = element.stop;
        } else {
            console.log('Do nothing')
        }
    });
}