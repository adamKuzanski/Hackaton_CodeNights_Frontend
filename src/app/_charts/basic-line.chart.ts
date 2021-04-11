import {Chart} from 'angular-highcharts';

export class BasicLineChart extends Chart {

  constructor(title: string) {
    super({
      // xAxis: {
      //   zoomEnabled: true,
      // },
      title: {
        text: title
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
    });
  }

  pushSeries(seriesName: string, data): void {
    this.addSeries({
      name: seriesName,
      type: 'line',
      data
    }, true, true);
    this.ref.reflow();
  }

  clearSeries(): void {
    this.ref.series = [];
  }

}
