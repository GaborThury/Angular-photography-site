import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnChanges {

  @Input()
    filterBy = 'all';

  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
