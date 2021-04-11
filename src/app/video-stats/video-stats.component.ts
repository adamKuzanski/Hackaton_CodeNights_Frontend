import {Component, Input, OnInit} from '@angular/core';
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

  @Input() videoName: string;
  @Input() modal: NgbModalRef;

  chartPeople = new BasicLineChart(`Statistics of People`);
  chartVehicles = new BasicLineChart(`Statistics of Vehicles`);

  constructor(public stats: StatisticsService) {
  }

  ngOnInit(): void {
    let data: VideoStatsModel[];
    const nbOfPeopleOnImage = new Array<number>();
    const nbOfCars = new Array<number>();
    const nbOfCyclers = new Array<number>();
    const nbOfPeopleWithMask = new Array<number>();
    const nbOfPeopleWithOutMask = new Array<number>();

    this.stats.getStats(this.videoName).subscribe(value => {
      data = value;

      data.forEach((value1) => {
        nbOfPeopleOnImage.push(value1.nbOfPeopleOnImage);
        nbOfCars.push(value1.nbOfCars);
        nbOfCyclers.push(value1.nbOfCyclers);
        nbOfPeopleWithMask.push(value1.nbOfPeopleWithMask);
        nbOfPeopleWithOutMask.push(value1.nbOfPeopleWithOutMask);
      });

      console.log(nbOfPeopleOnImage);

      this.chartPeople.pushSeries('Osoby', nbOfPeopleOnImage);
      this.chartPeople.pushSeries('Osoby w masce', nbOfPeopleWithMask);
      this.chartPeople.pushSeries('Osoby bez maski', nbOfPeopleWithOutMask);
      this.chartVehicles.pushSeries('Samochody', nbOfCars);
      this.chartVehicles.pushSeries('Rowery', nbOfCyclers);
    });


  }

}
