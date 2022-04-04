import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileData } from '../../model/files.model';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders : [FileUploadPresenterService]
})

export class FileUploadPresentationComponent implements OnInit {

  @Output() filesUpload:EventEmitter<FileData> ;

  public file : File;
  constructor(private fs:FileUploadPresenterService) { 
    this.filesUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this.saveFile(); 
  }
  
  public onFileChange(fileToAdd:any){   
    this.file = fileToAdd.files[0];
    console.log(this.file);
  }
  
  public addFiles(){
    this.fs.readFile(this.file);
    console.log(this.file);
    
  }
  private saveFile(){
    this.fs.fileRead$.subscribe((res)=>{
      this.filesUpload.emit(res);
    })
   }
   
  }

  

