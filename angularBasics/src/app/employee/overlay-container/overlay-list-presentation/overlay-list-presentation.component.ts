import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee, EmployeeForm } from '../../model/employee.model';

@Component({
  selector: 'app-overlay-list-presentation',
  templateUrl: './overlay-list-presentation.component.html',
  styleUrls: ['./overlay-list-presentation.component.scss']
})
export class OverlayListPresentationComponent implements OnInit {

  public formTitle: string;
  public formActive: boolean;
  public editId: number;
  @Input() dataToEdit: EmployeeForm;

  @Output() public saveFormData: EventEmitter<EmployeeForm>;
  @Output() public editFormData: EventEmitter<EmployeeForm>;
  @Output() public deleteId: EventEmitter<number>;
  @Output() public idToEdit: EventEmitter<number>;

  constructor() {
    this.formTitle = "Add Employee";
    this.formActive = false;
    this.saveFormData = new EventEmitter();
    this.editFormData = new EventEmitter();
    this.deleteId = new EventEmitter();
    this.idToEdit = new EventEmitter();
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
    this.formTitle = "Add Employee";
    this.formActive = true;
  }

  public closeOverlay() {
    this.formActive = false;
  }

  public saveData(employeeForm: EmployeeForm) {
    this.saveFormData.emit(employeeForm);
    this.closeOverlay();
  }

  public onDelete(id: number) {
    this.deleteId.emit(id);
  }

  public onEdit(id: number) {
    this.formTitle = "Edit Employee";
    this.idToEdit.emit(id);
    this.editId = id;
    this.formActive = true;
  }

  public editData(employeeForm: EmployeeForm){
    this.editFormData.emit(employeeForm);
  }
}
