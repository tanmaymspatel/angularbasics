import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class FileUploadPresenterService {

  private _files:Subject<any>;
  public files$:Observable<any>; 

  constructor() { 
    this._files = new Subject<any>();
    this.files$ = this._files.asObservable();
  }

  getFiles(file:any){
    this._files.next(file);
  }

  //remove uploaded file
  removeFiles(filename:string,data:any){
    const index = data.findIndex((file:any )=> file.name == filename);
     return data.splice(index,1);
}
}
