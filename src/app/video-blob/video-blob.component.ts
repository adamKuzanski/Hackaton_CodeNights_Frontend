import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VideoStatsComponent} from '../video-stats/video-stats.component';

@Component({
  selector: 'app-video-blob',
  templateUrl: './video-blob.component.html',
  styleUrls: ['./video-blob.component.sass']
})
export class VideoBlobComponent implements OnInit {

  static i = 0;
  i: number;

  @Input() videoName: string;
  public visible = true;

  constructor(private modalService: NgbModal) {
    this.i = VideoBlobComponent.i++;
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
    console.log(this.i);
    modalRef.componentInstance.videoName = this.videoName;
    modalRef.componentInstance.first = !this.i;
    modalRef.componentInstance.modal = modalRef;
  }

}
