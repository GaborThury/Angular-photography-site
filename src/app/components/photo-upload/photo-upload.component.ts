import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('On file selected.');
    console.log(this.selectedFile);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('photo', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3010/photos', fd)
    .subscribe(d => {
      console.log(d);
    });
    console.log('upload');
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
