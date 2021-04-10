import {Chart} from 'highcharts';

export class BasicLineChart extends Chart {

  constructor(title: string) {
    super({
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


}
