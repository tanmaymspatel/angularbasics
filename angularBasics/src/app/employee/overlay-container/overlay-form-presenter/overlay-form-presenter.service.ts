import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()

export class OverlayFormPresenterService {

  constructor(
    private _fb: FormBuilder,
  ) {

   }

   createForm() {
    return this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required]
    })
  }
}
