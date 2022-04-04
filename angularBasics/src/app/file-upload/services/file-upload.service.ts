import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { FileData } from '../model/files.model';

@Injectable()
export class FileUploadService {

  public apiLink : string;

  constructor(private http : HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // Upload File
  public addFile(file: FileData):Observable<FileData>{
    return this.http.post<FileData>(`${this.apiLink}/files`, file)
  }

  // Get File List
  public getFile(): Observable<FileData[]>{
    return this.http.get<FileData[]>(`${this.apiLink}/files`)
  }
}
