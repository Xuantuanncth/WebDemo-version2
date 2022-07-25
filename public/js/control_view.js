const mayBom = document.getElementById("ctl_mayBom");
const bomOxi = document.getElementById("ctl_bomOxi");
const locNuoc = document.getElementById("ctl_locNuoc");
const soNongLanh = document.getElementById("ctl_soNongLanh");
const maySuoi = document.getElementById("ctl_maySuoi");
const auto = document.getElementById("ctl_auto");
const _setRange1 = document.getElementById('setRange1');
const _setRange2 = document.getElementById('setRange2');
const _setRange3 = document.getElementById('setRange3');
const _bom_status = document.getElementById("maybom_status");
const _auto_status = document.getElementById("auto_status");
const _oxi_status = document.getElementById("oxi_status");
const _loc_status = document.getElementById("loc_status");
const _so_status = document.getElementById("so_status");
const _suoi_status = document.getElementById("suoi_status");
const _data_status = 'deviceStatus';
const _data_config = 'deviceRanger';
let isFirst = false;

//- Check case if enable Auto will disable control mode

function updateBootStrap(status) {
    $('#ctl_mayBom').bootstrapToggle(status);
    $('#ctl_bomOxi').bootstrapToggle(status);
    $('#ctl_locNuoc').bootstrapToggle(status);
    $('#ctl_soNongLanh').bootstrapToggle(status);
    $('#ctl_maySuoi').bootstrapToggle(status);
}

function enableStyle(is_enable) {
    if (is_enable) {
        _setRange1.style.removeProperty("display");
        _setRange2.style.removeProperty("display");
        _setRange3.style.removeProperty("display");
    } else {
        _setRange1.style.display = "none";
        _setRange2.style.display = "none";
        _setRange3.style.display = "none";
    }
}

function checkAutoClick() {
    console.log('Auto check ', auto.checked)
    if (auto.checked == true) {
        updateBootStrap('disable');
        enableStyle(true);
    } else {
        updateBootStrap('enable');
        enableStyle(false);
    }
    _auto_status.src = checkSrc(auto.checked);
    if (isFirst == false) {
        sendConfig(_data_status, "auto", auto.checked);
    }
    isFirst = false;
}

function deviceChecked(id) {
    console.log("ID : ", id);
    if (id == 1) {
        _bom_status.src = checkSrc(mayBom.checked);
        sendConfig(_data_status, "maybom", mayBom.checked);
    } else if (id == 2) {
        _oxi_status.src = checkSrc(bomOxi.checked);
        sendConfig(_data_status, "bomoxi", bomOxi.checked);
    } else if (id == 3) {
        _loc_status.src = checkSrc(locNuoc.checked);
        sendConfig(_data_status, "locnuoc", locNuoc.checked);
    } else if (id == 4) {
        _so_status.src = checkSrc(soNongLanh.checked);
        sendConfig(_data_status, "sononglanh", soNongLanh.checked);
    } else {
        _suoi_status.src = checkSrc(maySuoi.checked);
        sendConfig(_data_status, "maysuoi", maySuoi.checked);
    }
}

function checkSrc(isCheck) {
    return isCheck ? "/images/led1.png" : "/images/led2.png";
}

function settingRange(id) {
    let data = document.getElementById(id).value;
    console.log("Value setting: ", id, " data", data);
    sendConfig(_data_config, id, data);
}

function sendConfig(dataConfig, id, value) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ select: dataConfig, id: id, value: value })
    };
    const url = '/control/sendConfig';
    fetch(url, requestOptions)
        .then(data => console.log("Data: ", data.statusText))
        .catch(error => console.log("Error: ", error))
}

window.onload = function loadConfig() {
    console.log("Load config ");
    const url = '/control/loadConfig';
    isFirst = true;
    fetch(url).then((response) => {
        console.log("Get local config");
        response.json().then((data) => {
            if (data.error) {
                console.log("Data error: ", data.error);
            } else {
                console.log("Data============>", data);
                data.forEach(element => {
                    if (element.id == 'auto') {
                        auto.checked = element.value;
                    } else if (element.id == 'maybom') {
                        mayBom.checked = element.value;
                    } else if (element.id == 'bomoxi') {
                        bomOxi.checked = element.value;
                    } else if (element.id == 'locnuoc') {
                        locNuoc.checked = element.value;
                    } else if (element.id == 'sononglanh') {
                        soNongLanh.checked == element.value;
                    } else if (element.id == 'maysuoi') {
                        maySuoi.checked == element.value;
                    }
                });
                checkAutoClick();
            }
        })
    })
}