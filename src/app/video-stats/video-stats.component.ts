import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StatisticsService} from '../_services/statistics.service';
import {BasicLineChart} from '../_charts/basic-line.chart';
import {VideoStatsModel} from '../_models/VideoStatsModel';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.sass']
})
export class VideoStatsComponent implements OnInit {

  @Input() first: boolean;
  status = 'Ladowanie...';

  constructor(public stats: StatisticsService) {
  }

  @Input() videoName: string;
  @Input() modal: NgbModalRef;

  chartPeople: BasicLineChart;
  chartVehicles: BasicLineChart;

  ngOnInit(): void {

    let data: VideoStatsModel[];
    const nbOfPeopleOnImage = new Array<any>();
    const nbOfCars = new Array<any>();
    const nbOfCyclers = new Array<any>();
    const nbOfPeopleWithMask = new Array<any>();
    const nbOfPeopleWithOutMask = new Array<any>();

    if (this.first) {
      this.stats.getStats(this.videoName).subscribe(value => {
        data = value;

        this.chartPeople = new BasicLineChart(`Statistics of People`);
        this.chartVehicles = new BasicLineChart(`Statistics of Vehicles`);

        data.forEach((value1, index) => {
          nbOfPeopleOnImage.push([index * 2, value1.nbOfPeopleOnImage]);
          nbOfCars.push([index * 2, value1.nbOfCars]);
          nbOfCyclers.push([index * 2, value1.nbOfCyclers]);
          nbOfPeopleWithMask.push([index * 2, value1.nbOfPeopleWithMask]);
          nbOfPeopleWithOutMask.push([index * 2, value1.nbOfPeopleWithOutMask]);
        });

        setTimeout(() => {
          this.chartPeople.pushSeries('Osoby', nbOfPeopleOnImage);

          this.chartPeople.pushSeries('Osoby w masce', nbOfPeopleWithMask);
          this.chartPeople.pushSeries('Osoby bez maski', nbOfPeopleWithOutMask);
          this.chartVehicles.pushSeries('Samochody', nbOfCars);
          this.chartVehicles.pushSeries('Rowery', nbOfCyclers);
          this.status = '';
        }, 500);
      });
    } else {
      this.stats.getStatsRand(this.videoName).subscribe(value => {
        data = value;

        this.chartPeople = new BasicLineChart(`Statistics of People`);
        this.chartVehicles = new BasicLineChart(`Statistics of Vehicles`);

        data.forEach((value1, index) => {
          nbOfPeopleOnImage.push([index * 2, value1.nbOfPeopleOnImage]);
          nbOfCars.push([index * 2, value1.nbOfCars]);
          nbOfCyclers.push([index * 2, value1.nbOfCyclers]);
          nbOfPeopleWithMask.push([index * 2, value1.nbOfPeopleWithMask]);
          nbOfPeopleWithOutMask.push([index * 2, value1.nbOfPeopleWithOutMask]);
        });

        setTimeout(() => {
          this.chartPeople.pushSeries('Osoby', nbOfPeopleOnImage);

          this.chartPeople.pushSeries('Osoby w masce', nbOfPeopleWithMask);
          this.chartPeople.pushSeries('Osoby bez maski', nbOfPeopleWithOutMask);
          this.chartVehicles.pushSeries('Samochody', nbOfCars);
          this.chartVehicles.pushSeries('Rowery', nbOfCyclers);
          this.status = '';
        }, 500);
      });
    }


  }

}
