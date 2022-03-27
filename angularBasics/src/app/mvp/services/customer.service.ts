import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customers, CustomersForm } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable()

export class CustomerService {

  public apiLink : string;

  constructor(private http: HttpClient ) { 
    this.apiLink = environment.baseURL;
  }

  //  post call - add data to the database
  public addCustomer(formData:CustomersForm):Observable<CustomersForm>{
    return this.http.post<CustomersForm>(`${this.apiLink}/customers`, formData);
  }

  // get call - Get data from the database
  public getCustomersList() : Observable<Customers[]>{
    return this.http.get<Customers[]>(`${this.apiLink}/customers`);
  }

  // delete call - Delete customer from the database
  public deleteCustomer(id:number) : Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/customers/${id}`);
  }

  // Get customer data from an id
  public getCustomerDataById(id : string): Observable <Customers>{
    return this.http.get<Customers>(`${this.apiLink}/customers/${id}`)
  }

  // Edit call - Edit customer inthe database
  public editCutomer(formData:CustomersForm, id:string) : Observable<CustomersForm>{
    return this.http.put<CustomersForm>(`${this.apiLink}/customers/${id}`,formData)
  }
}
