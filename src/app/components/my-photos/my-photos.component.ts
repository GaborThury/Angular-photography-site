import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/photos/Austria.jpg' },
      { name: 'assets/photos/doge.jpg' },
      { name: 'assets/photos/lookout.jpg' },
      { name: 'assets/photos/mushroom.jpg' },
      { name: 'assets/photos/snowy.jpg' }
    ];
  }

}
