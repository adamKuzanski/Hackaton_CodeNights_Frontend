import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../_services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public blobs: {videoName: string}[] = [];

  constructor(private fileService: FileUploadService) {
  }

  ngOnInit(): void {
    this.fileService.getAll().subscribe(data => {
      data.forEach(value => {
        this.blobs.push({
          videoName: value
        });
      });
    });
  }

}
