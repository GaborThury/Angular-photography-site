import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {}

  visibleImages = [];

  readonly images = [
    {
      'id': 1,
      'category': 'nature',
      'caption': 'The Alps',
      'url': 'assets/photos/Austria.jpg'
    },
    {
      'id': 2,
      'category': 'dogs',
      'caption': 'oh, yello',
      'url': 'assets/photos/doge.jpg'
    },
    {
      'id': 3,
      'category': 'mushrooms',
      'caption': 'Mushroom',
      'url': 'assets/photos/mushroom.jpg'
    },
    {
      'id': 4,
      'category': 'nature',
      'caption': 'Snowy',
      'url': 'assets/photos/snowy.jpg'
    }
  ];

  getImages() {
    return this.visibleImages = this.images.slice(0);
  }

  getImage(id: number) {
    return this.images.slice(0).find(image => image.id === id);
  }
}

