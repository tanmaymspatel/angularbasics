import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customers, CustomersForm } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers-form-container',
  templateUrl: './customers-form-container.component.html',
  styleUrls: ['./customers-form-container.component.scss']
})
export class CustomersFormContainerComponent implements OnInit {

  public id : string;
  // store data of perticular id
  public CustomerEditData$ : Observable<Customers> ;

  constructor(private customerService : CustomerService, private router : Router, private activatedRoutes : ActivatedRoute) { 
    
    this.CustomerEditData$ = new Observable<Customers>();
    this.id = this.activatedRoutes.snapshot.params['id'];    

    if(this.id){
      // stored the data to be edited and now pass it to the form presentation to patch value to the form
      this.CustomerEditData$ = this.customerService.getCustomerDataById(this.id)
    }
  }

  ngOnInit(): void {
    
  }

  public addCustomer(formData : CustomersForm){
    this.customerService.addCustomer(formData).subscribe((res:CustomersForm) => {
      this.router.navigateByUrl('mvp/list');
    });
  }
  
  public editCustomer(formData : CustomersForm){
    this.customerService.editCutomer(formData,this.id).subscribe(()=>{
      this.router.navigateByUrl('mvp/list');      
    })  
  }

}

