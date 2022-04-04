import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FileData } from '../../model/files.model';

@Injectable()
export class FileUploadPresenterService {

  public fileData : FileData;

  private _fileRead : Subject<FileData>;
  public fileRead$ : Observable<FileData>;

  constructor() { 
    this.fileData = <FileData>{} ;
    this._fileRead = new Subject();
    this.fileRead$ = new Observable();
    this.fileRead$ = this._fileRead.asObservable();
  }

  // public getFiles(file:any){
  //   this._files.next(file);
  // }

  public readFile(file: File){
    let size = Math.round(file.size/1024/1024);
    if(size<=2){
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
      alert("File size must be 2 MB or less")
    }
  }

  //remove uploaded file
//   removeFiles(filename:string,data:any){
//     const index = data.findIndex((file:any )=> file.name == filename);
//      return data.splice(index,1);
// }
}
