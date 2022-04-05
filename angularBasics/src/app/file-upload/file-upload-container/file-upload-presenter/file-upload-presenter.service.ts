import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FileData } from '../../model/files.model';

@Injectable()
export class FileUploadPresenterService {

  public fileData : FileData;
  private _fileExist : boolean;
  private _fileRead : Subject<FileData>;
  public fileRead$ : Observable<FileData>;

  constructor() { 
    this.fileData = <FileData>{} ;
    this._fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this._fileRead.asObservable();
    this._fileExist = false;
  }

  // public getFiles(file:any){
  //   this._files.next(file);
  // }

  public readFile(file: File, fileToCheck : FileData[]){
  
    for(let i=0; i < fileToCheck?.length ; i++){
      if(fileToCheck[i].filename == file.name){
        this._fileExist = true;
        break;
      }
    }

    let size = Math.round(file.size/1024/1024);

    if(this._fileExist == false){

      if(size<=2  ){
        this.fileData.filename = file.name;
        this.fileData.size = file.size;
        this.fileData.type = file.type;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event)=>{
          this.fileData.content = <string>event.target?.result;
          this._fileRead.next(this.fileData);  
        }
      }else{
        alert("File size must be 2 MB ");
        this._fileExist = false;
      }
    }else{
      alert("not allowed")
    }
  }

}