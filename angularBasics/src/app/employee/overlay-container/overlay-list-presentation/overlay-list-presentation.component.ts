import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee, EmployeeForm } from '../../model/employee.model';

@Component({
  selector: 'app-overlay-list-presentation',
  templateUrl: './overlay-list-presentation.component.html',
  styleUrls: ['./overlay-list-presentation.component.scss']
})
export class OverlayListPresentationComponent implements OnInit {

  // @ViewChild('closeOverlay', { static: true }) overlayClose: ElementRef<HTMLDivElement>;
  public formTitle: string;
  public formActive: boolean;

  @Output() public saveFormData: EventEmitter<EmployeeForm>;

  constructor() {
    this.formTitle = "Add Employee";
    this.formActive = false;
    this.saveFormData = new EventEmitter();
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
  }

  public onClickAdd() {
    this.formActive = true;
  }

  public closeOverlay() {
    this.formActive = false;
  }

  public saveData(employeeForm: EmployeeForm) {
    this.saveFormData.emit(employeeForm);
    this.closeOverlay();
  }
}
