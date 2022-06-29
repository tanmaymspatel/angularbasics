import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-overlay-list-presentation',
  templateUrl: './overlay-list-presentation.component.html',
  styleUrls: ['./overlay-list-presentation.component.scss']
})
export class OverlayListPresentationComponent implements OnInit {

  @ViewChild ('closeOverlay', {static : true}) overlayClose : ElementRef<HTMLDivElement>;
  public formTitle: string;
  public formActive: boolean;

  constructor() {
    this.formTitle = "Add Employee";
    this.formActive = false;
   }

  private _employeeData: Employee[] | null;
  public get employeeData(): Employee[] | null {
    return this._employeeData;
  }
  @Input() public set employeeData(data: Employee[] | null) {
    if (data) {
      this._employeeData = data;
    }
  }

  ngOnInit(): void {
    this.closeOverlay();
  }

  public onClickAdd(){
    this.formActive = true;
  }
  
  public closeOverlay(){
  console.log(this.overlayClose);
  }
}
