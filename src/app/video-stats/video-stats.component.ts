import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StatisticsService} from '../_services/statistics.service';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.sass']
})
export class VideoStatsComponent implements OnInit {

  @Input() videoName: string;
  @Input() modal: NgbModalRef;

  data = null;

  constructor(public stats: StatisticsService) {
  }

  ngOnInit(): void {
    this.stats.getStats(this.videoName).subscribe(value => {
      this.data = value;
    });
  }

}
