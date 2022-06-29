import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';

@Injectable()
export class EmployeeService {

  public apiLink : string;

  constructor(private _http: HttpClient ) { 
    this.apiLink = environment.baseURL;
  }

  // get call - Get data from the database
  public getCustomersList() : Observable<Employee[]>{
    return this._http.get<Employee[]>(`${this.apiLink}/employees`);
  }

}
