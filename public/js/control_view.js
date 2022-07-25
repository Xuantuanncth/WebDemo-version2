const socket = io()

const e_mayBom = document.getElementById("ctl_mayBom");
const e_bomOxi = document.getElementById("ctl_bomOxi");
const e_locNuoc = document.getElementById("ctl_locNuoc");
const e_soNongLanh = document.getElementById("ctl_soNongLanh");
const e_maySuoi = document.getElementById("ctl_maySuoi");
const e_auto = document.getElementById("ctl_auto");
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
    console.log('Button Auto ', e_auto.checked)
    if (e_auto.checked == true) {
        updateBootStrap('disable');
        enableStyle(true);
    } else {
        updateBootStrap('enable');
        enableStyle(false);
    }
    _auto_status.src = checkSrc(e_auto.checked);
    if (isFirst == false) {
        sendConfig(_data_status, "auto", e_auto.checked);
    }
    isFirst = false;
}

function deviceChecked(id) {
    console.log("ID : ", id);
    if (id == 1) {
        _bom_status.src = checkSrc(e_mayBom.checked);
        sendConfig(_data_status, "maybom", e_mayBom.checked);
    } else if (id == 2) {
        _oxi_status.src = checkSrc(e_bomOxi.checked);
        sendConfig(_data_status, "bomoxi", e_bomOxi.checked);
    } else if (id == 3) {
        _loc_status.src = checkSrc(e_locNuoc.checked);
        sendConfig(_data_status, "locnuoc", e_locNuoc.checked);
    } else if (id == 4) {
        _so_status.src = checkSrc(e_soNongLanh.checked);
        sendConfig(_data_status, "sononglanh", e_soNongLanh.checked);
    } else {
        _suoi_status.src = checkSrc(e_maySuoi.checked);
        sendConfig(_data_status, "maysuoi", e_maySuoi.checked);
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
                        e_auto.checked = element.value;
                        $('#ctl_auto').bootstrapToggle(element.value ? 'on' : 'off');
                    } else if (element.id == 'maybom') {
                        e_mayBom.checked = element.value;
                        $('#ctl_mayBom').bootstrapToggle(element.value ? 'on' : 'off');
                    } else if (element.id == 'bomoxi') {
                        e_bomOxi.checked = element.value;
                        $('#ctl_bomOxi').bootstrapToggle(element.value ? 'on' : 'off');
                    } else if (element.id == 'locnuoc') {
                        e_locNuoc.checked = element.value;
                        $('#ctl_locNuoc').bootstrapToggle(element.value ? 'on' : 'off');
                    } else if (element.id == 'sononglanh') {
                        e_soNongLanh.checked == element.value;
                        $('#ctl_soNongLanh').bootstrapToggle(element.value ? 'on' : 'off');
                    } else if (element.id == 'maysuoi') {
                        e_maySuoi.checked == element.value;
                        $('#ctl_maySuoi').bootstrapToggle(element.value ? 'on' : 'off');
                    }
                });
                checkAutoClick();
            }
        })
    })
}

socket.on('updateData', (data) => {
    console.log('data ===========> : ', data);
    e_auto.checked = data.auto;
    $('#ctl_auto').bootstrapToggle(data.auto ? 'on' : 'off');
    e_mayBom.checked = data.maybom;
    $('#ctl_mayBom').bootstrapToggle(data.maybom ? 'on' : 'off');
    e_bomOxi.checked = data.bomoxi;
    $('#ctl_bomOxi').bootstrapToggle(data.bomoxi ? 'on' : 'off');
    e_locNuoc.checked = data.locnuoc;
    $('#ctl_locNuoc').bootstrapToggle(data.locnuoc ? 'on' : 'off');
    e_soNongLanh.checked == data.sononglanh;
    $('#ctl_soNongLanh').bootstrapToggle(data.sononglanh ? 'on' : 'off');
    e_maySuoi.checked == data.maysuoi;
    $('#ctl_maySuoi').bootstrapToggle(data.maysuoi ? 'on' : 'off');
})