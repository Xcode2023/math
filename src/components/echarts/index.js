import * as echarts from "echarts";

export const myEcharts = {
  makeEcharts: (el) => {
    let chartDom = el.value;
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 250],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            { value: 40, name: "编程" },
            { value: 38, name: "剪辑" },
            { value: 32, name: "电吉他" },
            { value: 30, name: "数学" },
            { value: 28, name: "音乐" },
            { value: 26, name: "文学" },
            { value: 22, name: "运动" },
            { value: 18, name: "电子" },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  },
  //make
  math: (el) => {
    let chartDom = el.value;
    let myChart = echarts.init(chartDom);
    let option;

    const data = [];
    for (let i = 0; i <= 100; i++) {
      let theta = (i / 100) * 360;
      let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
      data.push([r, theta]);
    }
    option = {
      title: {
        // text: "Two Value-Axes in Polar",
      },
      legend: {
        // data: ["line"],
      },
      polar: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 0,
      },
      radiusAxis: {},
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          data: data,
        },
      ],
    };

    option && myChart.setOption(option);
  },
  Gradient: (el) => {
    let chartDom = el.value;
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '中国古代算经博览',
              fontSize: 50,
              fontWeight: 'bold',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#989c8c',
              lineWidth: 1
            },
            keyframeAnimation: {
              duration: 3000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: 'black'
                  }
                }
              ]
            }
          }
        ]
      }
    };

    option && myChart.setOption(option);
  },
};
