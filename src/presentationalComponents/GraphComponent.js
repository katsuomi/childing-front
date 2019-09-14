import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'

function zeroPadding(num) {
  let str = String(num)
  if (str.length == 1) {
    return "0" + str
  } else {
    return str
  }
}

var config = {
  title: {
    text: ''
  },
  chart: {
    type: 'area',
    events: {
      load: function () {
        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var y = Math.random() * 50 + 60;
          series.addPoint([y], true, true);
        }, 1000);
      }
    }
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
      }
    },
    title: {
      text: ''
    }
  },
  yAxis: {
    labels: {
      formatter: function () {
        return this.value;
      }
    },
    title: {
      text: ''
    }
  },
  plotOptions: {
    area: {
      pointStart: 1568509200,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 1,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [{
  showInLegend: false,
  data: [69.86879919108293,
    94.5460044491916,
    65.66292326382481,
    61.48737216367374,
    80.77594088422046,
    67.86750180875403,
    109.35742465540609,
    86.62061038786209,
    103.56012095115037,
    94.06147605608754,
    84.09214000756894,
    82.11623884470133,
    82.15804102176955,
    95.7317220514775,
    68.2347926747922,
    96.38753456963889,
    107.91131402910382,
    80.52964989058361,
    90.19141352719254,
    68.10835345581962]
  }]
};

const GraphComponent = () => {
  return (
    <div className="marginTop30px">
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
}

export default GraphComponent;