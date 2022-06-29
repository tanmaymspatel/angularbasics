import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent implements OnInit {

  public employeeData$: Observable<Employee[]>

  constructor(
    private _employeeService: EmployeeService
  ) {
    this.employeeData$ = new Observable()
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  private getEmployeeData() {
    this.employeeData$ = this._employeeService.getCustomersList();
  }

}
