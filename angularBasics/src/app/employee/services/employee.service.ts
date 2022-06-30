import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee, EmployeeForm } from '../model/employee.model';

@Injectable()
export class EmployeeService {

  public apiLink: string;

  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // get call - Get data from the database
  public getEmployeeList(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  //  post call - add data to the database
  public addEmployee(formData: EmployeeForm): Observable<EmployeeForm> {
    return this._http.post<EmployeeForm>(`${this.apiLink}/employees`, formData);
  }

  // delete call - Delete Employee from the database
  public deleteEmployee(id: number): Observable<number> {
    return this._http.delete<number>(`${this.apiLink}/employees/${id}`);
  }

  // Get Employee data from an id
  public getEmployeeDataById(id: number): Observable<Employee> {
    return this._http.get<Employee>(`${this.apiLink}/employees/${id}`)
  }

  // Edit call - Edit Employee inthe database
  public editEmployee(formData: EmployeeForm, id: number): Observable<EmployeeForm> {
    return this._http.put<EmployeeForm>(`${this.apiLink}/employees/${id}`, formData)
  }
}
