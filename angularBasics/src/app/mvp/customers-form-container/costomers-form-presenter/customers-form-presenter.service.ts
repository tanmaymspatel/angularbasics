import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CustomersForm } from '../../model/customer.model';

@Injectable()


export class CustomersFormPresenterService {

  private customersFormData : Subject<CustomersForm>;
  public customersFormData$ : Observable<CustomersForm>

  constructor(private _fb :  FormBuilder) {
    this.customersFormData = new Subject();
    this.customersFormData$ = this.customersFormData.asObservable();
   }

  createForm(){
    return this._fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      city:['',Validators.required]
    }) 
  }

  public submitData(CustomersForm: FormGroup){
    if(!CustomersForm.valid){
      return
    }
    this.customersFormData.next(CustomersForm.value);
  }
}
