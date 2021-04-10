import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public blobs = [
    {videoName: 'Lodz Plac Wolnosci'},
    {videoName: 'Lodz Piotrkowska - Narutowicza'},
    {videoName: 'Lodz Piotrkowska - Traugutta'},
    {videoName: 'Lodz Piotrkowska - aleja Leona Schillera'},
    {videoName: 'Lodz Piotrkowska - Nawrot'},
    {videoName: 'Lodz Piotrkowska - Struga'},
    {videoName: 'Lodz Piotrkowska - Kościuszki'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
