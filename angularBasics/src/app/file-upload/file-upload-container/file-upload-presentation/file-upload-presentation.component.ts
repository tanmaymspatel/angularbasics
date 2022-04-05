import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileData } from '../../model/files.model';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders : [FileUploadPresenterService]
})

export class FileUploadPresentationComponent implements OnInit {

  
  @Input() public set filesToCheck(value : FileData[] | null) {
    if(value){
      this._filesToCheck = value;
    }

  }

  @Output() filesUpload:EventEmitter<FileData> ;

  public get filesToCheck() : FileData[] | null {
    return this._filesToCheck;
  }
  public file : File;
  
  private _filesToCheck!: FileData[] ;

  constructor(private fs:FileUploadPresenterService) { 
    this.filesUpload = new EventEmitter();
  }

  ngOnInit(): void {
    this.saveFile(); 
  }
  
  public onFileChange(fileToAdd:any){   
    this.file = fileToAdd.files[0];
    console.log(this.file);
    console.log(this._filesToCheck, "files to check");
    
  }
  
  public addFiles(){
    console.log(this._filesToCheck);
    debugger
    this.fs.readFile(this.file, this._filesToCheck);
  }
  
  private saveFile(){
    this.fs.fileRead$.subscribe((res)=>{
      this.filesUpload.emit(res);
    })
   }
   
  }

  

