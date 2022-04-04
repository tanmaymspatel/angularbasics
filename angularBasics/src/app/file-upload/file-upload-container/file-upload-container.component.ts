import { Component, OnInit } from '@angular/core';
import { FileData } from '../model/files.model';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload-container',
  templateUrl: './file-upload-container.component.html',
  styleUrls: ['./file-upload-container.component.scss']
})
export class FileUploadContainerComponent implements OnInit {

  constructor(private _uploadSerive : FileUploadService) { }

  ngOnInit(): void {
  }

  saveFile(file : FileData){
    console.log(file);
    this._uploadSerive.addFile(file).subscribe(()=>{
      alert("File added successfully");
    })
    
  }
}
