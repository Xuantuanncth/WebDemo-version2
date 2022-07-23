let w_dataSensor = [
    { day: 'Mon', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
    { day: 'Tue', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
    { day: 'Wed', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
    { day: 'Thu', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
    { day: 'Fir', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
    { day: 'Sat', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
    { day: 'Sun', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
];

let dataSensor = [{
    date: '23/7/2020',
    data: [
        { hour: '0h', value: { temp: 1, oxi: 11, pH: 7, duc: 1 } },
        { hour: '3h', value: { temp: 2, oxi: 20, pH: 6, duc: 2 } },
        { hour: '6h', value: { temp: 3, oxi: 30, pH: 5, duc: 5 } },
        { hour: '9h', value: { temp: 4, oxi: 11, pH: 4, duc: 5 } },
        { hour: '12h', value: { temp: 5, oxi: 12, pH: 7, duc: 6 } },
        { hour: '15h', value: { temp: 6, oxi: 14, pH: 8, duc: 8 } },
        { hour: '18h', value: { temp: 7, oxi: 16, pH: 9, duc: 9 } },
        { hour: '21h', value: { temp: 8, oxi: 16, pH: 9, duc: 9 } }
    ]
}, {
    date: '24/7/2020',
    data: [
        { hour: '0h', value: { temp: 11, oxi: 11, pH: 7, duc: 1 } },
        { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
        { hour: '6h', value: { temp: 33, oxi: 30, pH: 5, duc: 5 } },
        { hour: '9h', value: { temp: 44, oxi: 11, pH: 4, duc: 5 } },
        { hour: '12h', value: { temp: 55, oxi: 12, pH: 7, duc: 6 } },
        { hour: '15h', value: { temp: 66, oxi: 14, pH: 8, duc: 8 } },
        { hour: '18h', value: { temp: 77, oxi: 16, pH: 9, duc: 9 } },
        { hour: '21h', value: { temp: 88, oxi: 16, pH: 9, duc: 9 } }
    ]
}, {
    date: '25/7/2020',
    data: [
        { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
        { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
        { hour: '6h', value: { temp: 1, oxi: 30, pH: 5, duc: 5 } },
        { hour: '9h', value: { temp: 0, oxi: 11, pH: 4, duc: 5 } },
        { hour: '12h', value: { temp: 3, oxi: 12, pH: 7, duc: 6 } },
        { hour: '15h', value: { temp: 44, oxi: 14, pH: 8, duc: 8 } },
        { hour: '18h', value: { temp: 55, oxi: 16, pH: 9, duc: 9 } },
        { hour: '21h', value: { temp: 66, oxi: 16, pH: 9, duc: 9 } }
    ]
}, {
    date: '26/7/2020',
    data: [
        { hour: '0h', value: { temp: 20, oxi: 11, pH: 7, duc: 1 } },
        { hour: '3h', value: { temp: 22, oxi: 20, pH: 6, duc: 2 } },
        { hour: '6h', value: { temp: 25, oxi: 30, pH: 5, duc: 5 } },
        { hour: '9h', value: { temp: 30, oxi: 11, pH: 4, duc: 5 } },
        { hour: '12h', value: { temp: 33, oxi: 12, pH: 7, duc: 6 } },
        { hour: '15h', value: { temp: 25, oxi: 14, pH: 8, duc: 8 } },
        { hour: '18h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } },
        { hour: '21h', value: { temp: 24, oxi: 16, pH: 9, duc: 9 } }
    ]
}]

let d_dataSensor = [];

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
    // switch (key) {
    //     case 0:
    //         d_dataSensor = dataSensor[0].data;
    //         let _date = dataSensor[0].date;
    //         break;
    //     case 1:
    //         d_dataSensor = dataSensor[0].data;
    //         let _date = dataSensor[0].date;
    //         break;
    //     case 2:

    //         break;
    //     case 3:

    //         break;
    //     case 4:

    //         break;

    //     default:
    //         break;
    // }
    d_dataSensor = dataSensor[key].data;
    let _date = dataSensor[key].date;
    let d_title = "Biểu đồ theo ngày " + _date;
    updateBarChart(daily_Chart, d_dataSensor, d_title);
}

function updateBarChart(chart, u_data, dateConfig) {
    console.log("d_date: ===============> ", dateConfig);
    chart.options.plugins.title.text = dateConfig;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = d_dataSensor;
    });
    chart.update();
}

window.onload = function loadConfig() {
    console.log("==============> Window onload ==============>");
    // addButton();

}

function addButton() {
    dataSensor.forEach((element, index) => {
        console.log("Date: ", element.date, index);
        createButton(index, element.date);
    });
}

function createButton(id, name) {
    var button = document.createElement("button");
    button.id = "btnDate" + id;
    button.type = "button";
    button.textContent = name;
    button.onclick = function() { getDate(id) };
    button.classList = "btn btn-primary";

    var selectPanel = document.getElementById('btnDate');
    selectPanel.appendChild(button);
}