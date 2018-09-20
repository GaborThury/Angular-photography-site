import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validPages(): boolean {
    if ((this.router.url === '/') || (this.router.url === '/galleries') ) {
      return false;
    } else {
      return true;
    }
  }
}
