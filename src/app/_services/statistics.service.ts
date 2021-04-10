import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {VideoStatsModel} from '../_models/VideoStatsModel';
import {HttpClient, HttpParams} from '@angular/common/http';

const API = 'https://codenight-invigilationapp.azurewebsites.net/api/movie/';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getStats(videoName: string): Observable<VideoStatsModel> {
    const params = new HttpParams();
    params.append('movieName', videoName);

    return this.http.get<VideoStatsModel>(API + 'analyseMove', { params });
  }
}
