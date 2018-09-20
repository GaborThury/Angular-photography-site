import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  photo: string[];
  pictureUrl: string;
  showConfirm = false;

  constructor(private imageService: ImageService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  confirmDelete() {
    this.showConfirm = true;
  }

  delete() {
    // TODO: delete;
  }

  ngOnInit() {
    this.pictureUrl = this.activatedRoute.snapshot.params.url;
    this.activatedRoute.params.subscribe();
  }

}
