import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers-list-container',
  templateUrl: './customers-list-container.component.html',
  styleUrls: ['./customers-list-container.component.scss']
})
export class CustomersListContainerComponent implements OnInit {

  public customersData$ : Observable<Customers[]>
  public customerDataById : Observable<Customers>

  constructor(
    private customerService : CustomerService
    ) { 
    this.customersData$ = new Observable();
    }

  ngOnInit(): void {

    this.customersData$ = this.customerService.getCustomersList();
  }
  
  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(()=>{
      console.log(`${id} is deleted`);
      this.customersData$ = this.customerService.getCustomersList();
    })
  }

  public customerId(id:number){
    // console.log(id);
  }

}
