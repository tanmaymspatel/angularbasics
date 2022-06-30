import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeeForm } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent implements OnInit {

  public employeeData$: Observable<Employee[]>
  public dataToEdit: EmployeeForm;
  public editId: number;

  constructor(
    private _employeeService: EmployeeService
  ) {
    this.employeeData$ = new Observable()
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  private getEmployeeData() {
    this.employeeData$ = this._employeeService.getEmployeeList();
  }

  public addFormData(data: EmployeeForm) {
    this._employeeService.addEmployee(data).subscribe(() => {
      this.getEmployeeData();
    });
  }

  public deleteData(id: number) {
    this._employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployeeData();
    })
  }

  public getEditData(id: number) {
    this.editId = id;
    this._employeeService.getEmployeeDataById(id).subscribe((data) => this.dataToEdit = data)
  }

  public editFormData(employeeForm: EmployeeForm) {
    this._employeeService.editEmployee(employeeForm, this.editId).subscribe(() => 
    this.getEmployeeData()
    )
  }
}
