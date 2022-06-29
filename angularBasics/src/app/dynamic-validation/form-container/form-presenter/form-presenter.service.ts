import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AADHAR_PATTERN, PANCARD_PATTERN } from '../../constants';

@Injectable()

export class FormPresenterService {

  constructor(
    private _fb: FormBuilder
  ) { }

  public createForm() {
    return this._fb.group({
      age: ['', Validators.required],
      documentNumber: ['', Validators.required]
    })
  }

  public dynamicValidation(myForm : FormGroup){
    myForm.get("age")?.valueChanges.subscribe((value) => {
      if (value >= 15 && value <18){
        // myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(AADHAR_PATTERN)])
        // myForm.get("documentNumber")?.updateValueAndValidity();
        console.log("you are between 15-18");
        
      }
      else if (value >= 18){
        // myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(PANCARD_PATTERN)])
        // myForm.get("documentNumber")?.updateValueAndValidity();
        console.log("you are 18 or more");
      }
      else {
        // myForm.get("documentNumber")?.setValidators([Validators.required])
        // myForm.get("documentNumber")?.updateValueAndValidity();   
        console.log("you are less than 15");
        
      }
    })
  }
}
