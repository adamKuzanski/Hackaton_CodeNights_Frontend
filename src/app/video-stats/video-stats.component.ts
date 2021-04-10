import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.sass']
})
export class VideoStatsComponent implements OnInit {

  @Input() videoName: string;
  @Input() modal: NgbModalRef;

  constructor() {
  }

  ngOnInit(): void {
  }

}
