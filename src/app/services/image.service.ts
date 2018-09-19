import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}

  visibleImages = [];

  images =
  [
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


  getImages(): any[] {
    return this.visibleImages = this.images.slice(0);
  }
/*
  getAllPhoto() {
    return this.images = this.http.get('http://localhost:3010/photos');
  }
*/

  getImagesFromServer(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3010/photos');
  }
  getImage(id: number) {
    return this.images.slice(0).find(image => image.id === id);
  }
}

