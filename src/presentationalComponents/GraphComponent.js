import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
import { connect } from 'react-redux'
import {kcalFunc,bpmFunc} from "../actions"

// perlin noise
var j = 0
var MAX_VERTICES = 256;
var r = [];

const perlinNoise = (scale) => {
    let scaledX = j / scale;
    j++;
    let xFloor = Math.floor(scaledX);
    let t = scaledX - xFloor;
    let tRemapSmoothstep = t * t * (3 - 2 * t);

    let xMin = xFloor;
    let xMax = (xMin + 1);

    let y = lerp(r[xMin], r[xMax], tRemapSmoothstep);

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

const config = (isOverlay, randomFunc, onChange) => {
    const transparent = 'rgba(0,0,0,0)'
    const randomValue = (weight, bias) => {
        return randomFunc() * weight + bias;
    }
    const dynamicGraph1 = () => {
        return 110 + perlinNoise(5) * 20 + Math.random() * 5
    }
    const dynamicGraph2 = () => {
        return 60 + perlinNoise(5) * 20 + Math.random() * 5
    }
    const initGraph1 = () => {
        let weight = 50
        let bias = 60
        let n = 20
        var res = []
        for (var i = 0; i < n; i++) {
            let v = 3 * i + 50 + perlinNoise(5) * 20 + Math.random() * 5
            res.push(v)
        }
        return res
    }
    const initGraph2 = () => {
        let weight = 50
        let bias = 60
        let n = 20
        var res = []
        for (var i = 0; i < n; i++) {
            let v = 60 + perlinNoise(5) * 20 + Math.random() * 5
            res.push(v)
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
                        let newValue = isOverlay ? dynamicGraph1() : dynamicGraph2()
                        if (onChange) {
                            onChange(newValue)
                        }
                        series.addPoint([newValue], true, true);
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
                    color: !isOverlay ? '#666666' : transparent
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
            data: isOverlay ? initGraph1() : initGraph2()
        },
        ]
    };
}

for (var i = 0; i < MAX_VERTICES; ++i) {
    r.push(Math.random());
}

class GraphComponent extends Component {

    render() {
        let activeEnergyRandom = () => {
            return perlinNoise(5) * 0.3
        }
        let heartrateRandom = () => {
            return perlinNoise(10) * 0.3 + i / 10000;
        }
        return (
            <div>
                <div style={{ position: "absolute" }}>
                    <ReactHighcharts config={config(false, activeEnergyRandom, (x) => {
                        // this.props.onActiveEnergyChange(x * 12 / 5 - 124)
                        this.props.kcalFunc(x * 12 / 5 - 124)
                    })}></ReactHighcharts>
                </div>
                <div style={{ position: "absolute" }}>
                    <ReactHighcharts config={config(true, heartrateRandom, this.props.bpmFunc)}></ReactHighcharts>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = ({kcalFunc,bpmFunc})
export default connect(null, mapDispatchToProps)(GraphComponent)