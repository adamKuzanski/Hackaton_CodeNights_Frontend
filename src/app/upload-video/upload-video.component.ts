import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../_services/file-upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {VideoStatsComponent} from '../video-stats/video-stats.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.sass']
})
export class UploadVideoComponent implements OnInit {

  public file: File = null;
  public url: string | ArrayBuffer;
  public fileSent = false;

  constructor(private fileUploadService: FileUploadService, private snackBar: MatSnackBar, private modalService: NgbModal) {
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
      .subscribe(value => {
        this.snackBar.open('File uploaded - ' + value, 'Zamknij', {duration: 5000});
        this.fileSent = true;
      }, err => {
        console.log(err);
        this.fileSent = true;
        this.snackBar.open(err.error.text, 'Zamknij', {duration: 5000});
      });
  }
  showStats(): void {
    const modalRef = this.modalService.open(
      VideoStatsComponent,
      {
        size: 'xl',
        centered: true,
        scrollable: true
      });

    modalRef.componentInstance.videoName = this.file.name;
    modalRef.componentInstance.first = true;
    modalRef.componentInstance.modal = modalRef;
  }
}
