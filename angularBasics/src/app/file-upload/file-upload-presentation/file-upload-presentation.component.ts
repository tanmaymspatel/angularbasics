import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders : [FileUploadPresenterService]
})

export class FileUploadPresentationComponent implements OnInit {

  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();
  public startDate:string;
  public endDate:string;
  //files array
  public files: any[] = [];
  constructor(private fs:FileUploadPresenterService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fs.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.files = res;
      console.log(res);
    });
  }

  onFileChange(file:any){
    this.fs.getFiles(file);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }
  
  removeFiles(filename:string){
    this.fs.removeFiles(filename,this.files)
  }


  readStartDate(input:any){
    this.startDate=input.target.value;
  }

  readEndDate(input:any){
    this.endDate=input.target.value;
  }
}
