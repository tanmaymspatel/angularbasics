import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileData } from '../../model/files.model';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss'],
  viewProviders:[FileListPresenterService]
})
export class FileListPresentationComponent implements OnInit {
  
  @Input() public set fileData(v : FileData[] | null) {
    this._fileData = v;
  }
  private _fileData : FileData[] | null;

  public get fileData() : FileData[] | null{
    return this._fileData;
  }
  
  @Output() public deleteFile : EventEmitter<number> = new EventEmitter()
  
  constructor(private flpService : FileListPresenterService) { }

  ngOnInit(): void {
    
  }
  public showFile(content : string, type : string){
    this.flpService.viewFile(content, type);
  }

  public delete(i:number){
    this.deleteFile.emit(i);
  }

}
