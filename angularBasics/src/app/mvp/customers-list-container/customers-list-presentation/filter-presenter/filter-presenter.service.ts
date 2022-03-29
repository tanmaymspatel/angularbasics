import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { CustomersForm } from 'src/app/mvp/model/customer.model';

@Injectable()
export class FilterPresenterService {

  private _filterFormData : Subject<CustomersForm>;
  public filterFormData$ : Observable<CustomersForm>

  constructor(private fb : FormBuilder) {

    this._filterFormData = new Subject();
    this.filterFormData$ = this._filterFormData.asObservable();

   }

  buildform(){
    return this.fb.group({
      firstname: [''],
      lastname: [''],
      age: ['' ],
      gender : [''],
      city : ['']
    })
  }

  public OnSubmit(filterFormData : FormGroup){
    this._filterFormData.next(filterFormData.value);
  }
}
