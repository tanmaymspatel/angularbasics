import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

const PANCARD_PATTERN = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
const AADHAR_PATTERN = /^[2-9]{1}[0-9]{11}$/;

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss'],
  viewProviders: [FormPresenterService]
})

export class FormPresentationComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public aadharPattern: RegExp;
  public pancardPattern: RegExp;
  public enteredAge: number;
  public placeHolder: string;
  public inputLength: number;
  public formStatus: string;

  constructor(
    private _formPresenterService: FormPresenterService
  ) {
    this.myForm = this._formPresenterService.createForm();
    this.submitted = false;
    this.aadharPattern = AADHAR_PATTERN;
    this.pancardPattern = PANCARD_PATTERN;
    this.placeHolder = "Enter Document Number";
    this.inputLength = 10;
  }

  ngOnInit(): void {
    this.dynamicValidation();
    this.statusChange();
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.myForm);
  }

  private dynamicValidation() {
    this.myForm.get("age")?.valueChanges.subscribe((age) => {
      this.enteredAge = age;
      if (age >= 15 && age < 18) {
        this.inputLength = 12;
        this.placeHolder = "Enter Aadhar Number"
        this.myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(AADHAR_PATTERN)])
        this.myForm.get("documentNumber")?.updateValueAndValidity();
      }
      else if (age >= 18) {
        this.inputLength = 10;
        this.placeHolder = "Enter Pancard Number"
        this.myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(PANCARD_PATTERN)])
        this.myForm.get("documentNumber")?.updateValueAndValidity();
      }
      else {
        this.myForm.get("documentNumber")?.setValidators([Validators.required])
        this.myForm.get("documentNumber")?.updateValueAndValidity();
      }
    })
  }

  private statusChange() {
    this.myForm.statusChanges.subscribe((status) => this.formStatus = status)
  }
}
