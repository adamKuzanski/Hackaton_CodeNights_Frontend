import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../_services/file-upload.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.sass']
})
export class UploadVideoComponent implements OnInit {

  public file: File = null;
  public url: string | ArrayBuffer;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(files: FileList): void {
    this.file = files.item(0);
    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.url = (event.target as FileReader).result;
      };
    }
  }

  onSubmit(): void {
    this.fileUploadService.uploadFile(this.file)
      .subscribe(value => console.log(value), err => {
        console.log(err);
      });
  }
}
