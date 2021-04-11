import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  public selected = 3;

  urls = [
    {
      name: 'Auta',
      data: [
        '/assets/Auta/1.PNG',
        '/assets/Auta/2.PNG',
        '/assets/Auta/3.PNG',
        '/assets/Auta/4.PNG',
        '/assets/Auta/5.PNG',
        '/assets/Auta/6.PNG',
        '/assets/Auta/7.PNG',
      ]
    },
    {
      name: 'Rower',
      data: [
        '/assets/Rower/1.PNG',
        '/assets/Rower/2.PNG',
        '/assets/Rower/3.PNG',
        '/assets/Rower/4.PNG',
        '/assets/Rower/5.PNG',
      ]
    },
    {
      name: 'Człowiek tyłem',
      data: [
        '/assets/Człowiek tyłem/1.PNG',
        '/assets/Człowiek tyłem/2.PNG',
        '/assets/Człowiek tyłem/3.PNG',
      ]
    },
    {
      name: 'Dobra maseczka',
      data: [
        '/assets/Dobra Maseczka/1.PNG',
        '/assets/Dobra Maseczka/2.PNG',
        '/assets/Dobra Maseczka/3.PNG',
        '/assets/Dobra Maseczka/4.PNG',
        '/assets/Dobra Maseczka/5.PNG',
        '/assets/Dobra Maseczka/6.PNG',
        '/assets/Dobra Maseczka/7.PNG',
        '/assets/Dobra Maseczka/8.PNG',
        '/assets/Dobra Maseczka/9.PNG',
        '/assets/Dobra Maseczka/10.PNG',
        '/assets/Dobra Maseczka/11.PNG',
        '/assets/Dobra Maseczka/12.PNG',
        '/assets/Dobra Maseczka/13.PNG',
        '/assets/Dobra Maseczka/14.PNG',
        '/assets/Dobra Maseczka/15.PNG',
        '/assets/Dobra Maseczka/16.PNG',
        '/assets/Dobra Maseczka/17.PNG',
        '/assets/Dobra Maseczka/18.PNG',
      ]
    },
    {
      name: 'Zla maseczka',
      data: [
        '/assets/Zła Maseczka/1.PNG',
        '/assets/Zła Maseczka/2.PNG',
        '/assets/Zła Maseczka/3.PNG',
        '/assets/Zła Maseczka/4.PNG',
        '/assets/Zła Maseczka/5.PNG',
        '/assets/Zła Maseczka/6.PNG',
        '/assets/Zła Maseczka/7.PNG',
        '/assets/Zła Maseczka/8.PNG',
        '/assets/Zła Maseczka/9.PNG',]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
