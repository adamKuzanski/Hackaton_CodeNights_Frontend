import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = 'https://codenight-invigilationapp.azurewebsites.net/api/movie/';


@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.set('file', file, file.name );
    // formData.append('file', file, file.name);

    return this.http.post<string>(API + 'uploadMovie', formData, {});
  }
}
