import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VideoStatsComponent} from '../video-stats/video-stats.component';

@Component({
  selector: 'app-video-blob',
  templateUrl: './video-blob.component.html',
  styleUrls: ['./video-blob.component.sass']
})
export class VideoBlobComponent implements OnInit {

  @Input() videoName: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  showStats(): void {
    const modalRef = this.modalService.open(
      VideoStatsComponent,
      {
        size: 'xl',
        centered: true,
        scrollable: true
      });
    modalRef.componentInstance.videoName = this.videoName;
    modalRef.componentInstance.modal = modalRef;
  }

}
