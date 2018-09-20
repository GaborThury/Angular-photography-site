import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  succesfulUpload = false;
  errorInUploadProgress = false;
  selectedFile: File = null;
  category = '';
  name = '';

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.name = this.selectedFile.name;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('photo', this.selectedFile, this.name + '.jpg');
    fd.append('category', this.category);
    this.http.post('http://localhost:3010/photos', fd, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.ResponseHeader) {
        if (event.status === 200) {
          this.succesfulUpload = true;
        }
        if (event.status === 400) {
          this.errorInUploadProgress = true;
        }
      }
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
