import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnChanges {

  @Input()
    filterBy = 'all';

  visibleImages: any[] = [];

  constructor(private imageService: ImageService, private router: Router) {
    this.imageService.getImagesFromServer().subscribe((res) => {
      this.visibleImages = res;
    });
   }

  open(url) {
    this.router.navigate(['/photo/' + url], url);
  }

  ngOnChanges() {
    this.imageService.getImagesFromServer().subscribe((res) => {
      this.visibleImages = res;
    });
  }

}
