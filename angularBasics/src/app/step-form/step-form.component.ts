import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {

  public personalDetailsForm: FormGroup;
  public addressDetailsForm: FormGroup;
  public educationDetailsForm: FormGroup;
  public personalSubmitted: boolean;
  public addressSubmitted: boolean;
  public educationSubmitted: boolean;
  public step = 1;

  constructor(private _fb: FormBuilder) {
    this.personalDetailsForm = this.buildPersonalForm();
    this.addressDetailsForm = this.buildAddressForm();
    this.educationDetailsForm = this.buildEducationForm();
    this.personalSubmitted = false;
    this.addressSubmitted = false;
    this.educationSubmitted = false;
  }

  ngOnInit(): void {
  }

  public buildPersonalForm() {
    return this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
    })
  }

  public buildAddressForm() {
    return this._fb.group({
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
    })
  }


  public buildEducationForm() {
    return this._fb.group({
      tenthMarks: ['', Validators.required],
      twelfthMarks: ['', Validators.required],
      bachelorsMarks: ['', Validators.required],
    })
  }

  public onNext() {
    if (this.step == 1) {
      this.personalSubmitted = true;
      if (this.personalDetailsForm.invalid) { return }
      this.step++
    }
    if (this.step == 2) {
      this.addressSubmitted = true;
      if (this.addressDetailsForm.invalid) { return }
      this.step++;
    }
  }

  public onPrevious() {
    this.step--
    if (this.step == 1) {
      this.personalSubmitted = false;
    }
    if (this.step == 2) {
      this.educationSubmitted = false;
    }
  }

  public onSubmit() {
    console.log("form submitted");
    if (this.step == 3) {
      this.educationSubmitted = true;
      if (this.educationDetailsForm.invalid) { return }
    }
  }

}

