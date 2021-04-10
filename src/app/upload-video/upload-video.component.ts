import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.sass']
})
export class UploadVideoComponent implements OnInit {

  public file: File = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileSelected(files: FileList): void {
    this.file = files.item(0);
  }
}
