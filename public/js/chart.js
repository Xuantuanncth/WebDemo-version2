// let week_dataSensor = [{
//         week: "1",
//         data: [
//             { day: 'Mon', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//             { day: 'Tue', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//             { day: 'Wed', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
//             { day: 'Thu', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
//             { day: 'Fir', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
//             { day: 'Sat', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
//             { day: 'Sun', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
//         ]
//     }

// ];

// let day_dataSensor = [{
//     date: '23/7/2020',
//     day: 'Mon',
//     data: [
//         { hour: '0h', value: { temp: 1, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 2, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 3, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 4, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 5, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 6, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 7, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 8, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '24/7/2020',
//     day: 'Tue',
//     data: [
//         { hour: '0h', value: { temp: 11, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 33, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 44, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 55, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 66, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 77, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 88, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '25/7/2020',
//     day: 'Wed',
//     data: [
//         { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 1, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 0, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 3, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 44, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 55, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 66, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '26/7/2020',
//     day: 'Thu',
//     data: [
//         { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '27/7/2020',
//     day: 'Fir',
//     data: [
//         { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '28/7/2020',
//     day: 'Sat',
//     data: [
//         { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }, {
//     date: '29/7/2020',
//     day: 'Sun',
//     data: [
//         { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
//         { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
//         { hour: '6h', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
//         { hour: '9h', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
//         { hour: '12h', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
//         { hour: '15h', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
//         { hour: '18h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } },
//         { hour: '21h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
//     ]
// }]


let day_dataSensor = [];
let d_dataSensor = [];
let w_dataSensor = [];

let w_data = {
    datasets: [{
        label: 'Nhiệt Độ',
        data: w_dataSensor,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'day',
            yAxisKey: 'value.temp'
        }
    }, {
        label: 'Oxi Hoà Tan',
        data: w_dataSensor,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'day',
            yAxisKey: 'value.oxi'
        }
    }, {
        label: 'Độ PH',
        data: w_dataSensor,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'day',
            yAxisKey: 'value.pH'
        }
    }, {
        label: 'Độ Đục',
        data: w_dataSensor,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'day',
            yAxisKey: 'value.duc'
        }
    }]
};
let s_data = {
    datasets: [{
        label: 'Nhiệt Độ',
        data: d_dataSensor,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'hour',
            yAxisKey: 'value.temp'
        }
    }, {
        label: 'Oxi Hoà Tan',
        data: d_dataSensor,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'hour',
            yAxisKey: 'value.oxi'
        }
    }, {
        label: 'Độ PH',
        data: d_dataSensor,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'hour',
            yAxisKey: 'value.pH'
        }
    }, {
        label: 'Độ Đục',
        data: d_dataSensor,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        tension: 0.4,
        parsing: {
            xAxisKey: 'hour',
            yAxisKey: 'value.duc'
        }
    }]
};



const config = {
    plugins: {
        title: {
            display: true,
            text: 'Biểu đồ theo tuần',
            font: {
                size: 25
            }
        },
        legend: {
            position: 'right'
        }
    }
};
const s_config = {
    plugins: {
        title: {
            display: true,
            text: 'Biểu đồ theo ngày ',
            font: {
                size: 25
            }
        },
        legend: {
            position: 'right'
        }
    }
};

let w_Chart = document.getElementById('firstChart').getContext('2d');

let weekly_Chart = new Chart(w_Chart, {
    type: 'line',
    data: w_data,
    options: config
})

let d_Chart = document.getElementById('secondChart').getContext('2d');

let daily_Chart = new Chart(d_Chart, {
    type: 'line',
    data: s_data,
    options: s_config
})



function getDate(key) {
    console.log('Get date ============> ');
    d_dataSensor = day_dataSensor[key].data;
    let _date = day_dataSensor[key].date;
    let d_title = "Biểu đồ theo ngày " + _date;
    updateBarChart(daily_Chart, d_dataSensor, d_title);
}

function getWeek(key) {
    // console.log('Get date ============> ');
    // w_dataSensor = week_dataSensor[key].data;
    // let _week = week_dataSensor[key].week;
    // let d_title = "Biểu đồ theo tuần " + _week;
    // updateBarChart(weekly_Chart, w_dataSensor, d_title);
}

function updateBarChart(chart, u_data, dateConfig) {
    console.log("d_date: ===============> ", dateConfig);
    chart.options.plugins.title.text = dateConfig;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = u_data;
    });
    chart.update();
}

window.onload = function loadConfig() {
    console.log("==============> Window onload ==============>");
    const url = '/chart/loadTimeConfig';
    fetch(url).then((response) => {
        console.log("Get local config");
        response.json().then((data) => {
            if (data.error) {
                console.log("Data error: ", data.error);
            } else {
                console.log("Data: ", data);
                //parseDataConfig(data);
                day_dataSensor = data;
            }
        })
    })

}

let isAddButton1 = false;
let isAddButton2 = false;

function addButton(key) {
    // if (key == 1 && isAddButton1 == false) {
    day_dataSensor.forEach((element, index) => {
        console.log("Date: ", element.date, index);
        createButton(1, index, element.date);
    });
    isAddButton1 = true;
    // } else if (key == 2 && isAddButton2 == false) {
    //     week_dataSensor.forEach((element, index) => {
    //         console.log("Date: ", element.week, index);
    //         createButton(2, index, element.week);
    //     });
    //     isAddButton2 = true;
    // }
}

function createButton(key, index, name) {
    var button = document.createElement("button");
    button.id = "btnDate" + index;
    button.type = "button";
    button.textContent = name;
    button.classList = "btn btn-primary add_button";

    if (key == 1) {
        button.onclick = function() { getDate(index) };
        var selectPanel = document.getElementById('btnDate');
    } else {
        button.onclick = function() { getWeek(index) };
        var selectPanel = document.getElementById('btnWeek');
    }

    selectPanel.appendChild(button);
}

function getWeekData() {
    console.log("Get week data: ");
    createWeekData(day_dataSensor);
    updateBarChart(weekly_Chart, w_dataSensor, "Biểu Đồ Theo Tuần");
}

function createWeekData(data) {
    data.forEach((element, index) => {
        let data = calculateData(element.data);
        w_dataSensor[index] = { day: element.day, value: data }
    });
}

function calculateData(data) {
    let x = 0;
    let temp_tbc = 0;
    let oxi_tbc = 0;
    let ph_tbc = 0;
    let duc_tbc = 0;

    data.forEach((element, index) => {
        temp_tbc += parseInt(element.value.temp);
        oxi_tbc += parseInt(element.value.oxi);
        ph_tbc += parseInt(element.value.pH);
        duc_tbc += parseInt(element.value.duc);
        x = index;
    });
    temp_tbc = temp_tbc / (x + 1);
    oxi_tbc = oxi_tbc / (x + 1);
    ph_tbc = ph_tbc / (x + 1);
    duc_tbc = duc_tbc / (x + 1);
    console.log(" Temp_tbc: ", temp_tbc, " indx: ", x);
    console.log(" oxi_tbc: ", oxi_tbc, " indx: ", x);
    console.log(" ph_tbc: ", ph_tbc, " indx: ", x);
    console.log(" duc_tbc: ", duc_tbc, " indx: ", x);

    return { temp: temp_tbc, oxi: oxi_tbc, pH: ph_tbc, duc: duc_tbc }
}