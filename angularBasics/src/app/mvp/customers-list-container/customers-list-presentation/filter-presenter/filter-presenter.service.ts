import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class FilterPresenterService {

  constructor(private fb : FormBuilder) { }

  buildform(){
    return this.fb.group({
      firstname: [''],
      lastname: [''],
      age: ['' ],
      gender : [''],
      city : ['']
    })
  }
}
