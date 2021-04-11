import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  const;
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
        '/assets/Auta/1.PNG',
        '/assets/Auta/2.PNG',
        '/assets/Auta/3.PNG',
        '/assets/Auta/4.PNG',
        '/assets/Auta/5.PNG',
      ]
    },
    {
      name: 'Człowiek tyłem',
      data: [
        '/assets/Auta/1.PNG',
        '/assets/Auta/2.PNG',
        '/assets/Auta/3.PNG',
      ]
    },
    {
      name: 'Dobra maseczka',
      data: [
        '/assets/Auta/1.PNG',
        '/assets/Auta/2.PNG',
        '/assets/Auta/3.PNG',
        '/assets/Auta/4.PNG',
        '/assets/Auta/5.PNG',
        '/assets/Auta/6.PNG',
        '/assets/Auta/7.PNG',
        '/assets/Auta/8.PNG',
        '/assets/Auta/9.PNG',
        '/assets/Auta/10.PNG',
        '/assets/Auta/11.PNG',
        '/assets/Auta/12.PNG',
        '/assets/Auta/13.PNG',
        '/assets/Auta/14.PNG',
        '/assets/Auta/15.PNG',
        '/assets/Auta/16.PNG',
        '/assets/Auta/17.PNG',
        '/assets/Auta/18.PNG',
      ]
    },
    {
      name: 'Zla maseczka',
      data: [
        '/assets/Auta/1.PNG',
        '/assets/Auta/2.PNG',
        '/assets/Auta/3.PNG',
        '/assets/Auta/4.PNG',
        '/assets/Auta/5.PNG',
        '/assets/Auta/6.PNG',
        '/assets/Auta/7.PNG',
        '/assets/Auta/8.PNG',
        '/assets/Auta/9.PNG',]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
