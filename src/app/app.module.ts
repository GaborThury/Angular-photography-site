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
import { GroupsComponent } from './components/groups/groups.component';

const paths: Routes = [
  { path: '', component: MyPhotosComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleriesComponent,
    MyPhotosComponent,
    ProfileComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
