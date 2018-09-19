import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { RouterModule, Routes } from '@angular/router';
import { MyPhotosComponent } from './components/my-photos/my-photos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageService } from './services/image.service';
import { FilterPipe } from './pipes/filter.pipe';

const paths: Routes = [
  { path: '', component: MyPhotosComponent, data: {
    hideFooter: true
  }},
  { path: 'galleries', component: GalleriesComponent },
  { path: 'photo/:url', component: ImageDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'new', component: PhotoUploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleriesComponent,
    MyPhotosComponent,
    ProfileComponent,
    PhotoUploadComponent,
    ImageDetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(paths),
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [
    ImageService,
    FilterPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
