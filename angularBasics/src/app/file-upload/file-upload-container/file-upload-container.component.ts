import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FileData } from '../model/files.model';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  public fileDataList$ : Observable<FileData[]>
  constructor(private _uploadSerive : FileUploadService, private router:Router) {
    this.fileDataList$ = new Observable();
   }

 

  ngOnInit(): void {
    this.getFiles();
    
  }
  
  // get file data list
  public getFiles(){
    this.fileDataList$ = this._uploadSerive.getFile();
  }

  saveFile(file : FileData){
    console.log(file);
  
    this._uploadSerive.addFile(file).subscribe(()=>{
      alert("File added successfully");
      this.router.navigateByUrl("file-upload/file-list");
    })
    
  }
}
