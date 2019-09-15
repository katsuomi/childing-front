import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'

// perlin noise
var i = 0
var MAX_VERTICES = 256;
var r = [];

const getVal = () => {
    let x = i / 3
    i++;

    var scaledX = x;
    var xFloor = Math.floor(scaledX);
    var t = scaledX - xFloor;
    var tRemapSmoothstep = t * t * (3 - 2 * t);

    var xMin = xFloor;
    var xMax = (xMin + 1);

    var y = lerp(r[xMin], r[xMax], tRemapSmoothstep);

    return y;
};

var lerp = (a, b, t) => {
    return a * (1 - t) + b * t;
};

// zero padding
const zeroPadding = (num) => {
    let str = String(num)
    if (str.length == 1) {
        return "0" + str
    } else {
        return str
    }
}

const config = (isOverlay, randomFunc) => {
    const transparent = 'rgba(0,0,0,0)'
    const randomValue = (weight, bias) => {
        return randomFunc() * weight + bias;
    }
    const randomValues = (weight, bias, n) => {
        var res = []
        for (var i = 0; i < n; i++) {
            res.push(randomValue(weight, bias))
        }
        return res
    }

    return {
        title: {
            text: ''
        },
        chart: {
            type: isOverlay ? 'line' : 'area',
            events: {
                load: function () {
                    var series = this.series[0];
                    setInterval(function () {

                        series.addPoint([randomValue(50, 60)], true, true);
                    }, 1000);
                }
            },
            backgroundColor: transparent
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    let date = new Date(this.value * 1000)
                    let hour = zeroPadding(date.getHours())
                    let min = zeroPadding(date.getMinutes())
                    let sec = zeroPadding(date.getSeconds())
                    return `${hour}:${min}:${sec}`;
                },
                style: {
                    color: isOverlay ? '#666666' : transparent
                }
            },
            title: {
                text: ''
            },
            tickColor: isOverlay ? 'rgb(204, 214, 235)' : transparent
        },
        yAxis: [
            {
                labels: {
                    formatter: function () {
                        return '';
                    },
                },
                title: {
                    text: ''
                },
                opposite: isOverlay,
                min: 50, max: 140
            },
            {
                labels: {
                    formatter: function () {
                        return '';
                    },
                },
                title: {
                    text: ''
                },
                opposite: !isOverlay,
                min: 50, max: 140
            },
        ],
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#52de97'],
                        [1, '#f4f4f4']
                    ]
                },
                pointStart: 1568509200,
            },
        },

        series: [{
            showInLegend: false,
            color: isOverlay ? 'red' : 'green',
            data: randomValues(50, 60, 20)
        },
        ]
    };
}

for (var i = 0; i < MAX_VERTICES; ++i) {
    r.push(Math.random());
}

class GraphComponent extends Component {
    render() {
        return (
            <div>
                <div style={{ position: "absolute" }}>
                    <ReactHighcharts config={config(false, getVal)}></ReactHighcharts>
                </div>
                <div style={{ position: "absolute" }}>
                    <ReactHighcharts config={config(true, Math.random)}></ReactHighcharts>
                </div>
            </div>
        );
    }
}

export default GraphComponent;