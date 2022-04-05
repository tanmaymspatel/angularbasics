import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileData } from '../model/files.model';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-list-container',
  templateUrl: './file-list-container.component.html',
  styleUrls: ['./file-list-container.component.scss']
})
export class FileListContainerComponent implements OnInit {

  public fileDataList$ : Observable<FileData[]>
  constructor(private uploadService : FileUploadService) {
    this.fileDataList$ = new Observable();
   }

  ngOnInit(): void {
    this.getFiles();
    
  }
  
  // get file data list
  public getFiles(){
    this.fileDataList$ = this.uploadService.getFile();
  }
  
  // delete file
  deleteFile(i : number){
    this.uploadService.deleteFile(i).subscribe({
      next: () => {
        this.fileDataList$ = this.uploadService.getFile();
        alert('Data Deleted')
      },

      error: (e) => { console.log(e);}
    })
  }
}
