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
  public submitted : boolean;
  public aadharPattern: RegExp;
  public pancardPattern: RegExp;
  public enteredAge: number;
  

  @ViewChild("document",{static: false}) document: HTMLInputElement;


  constructor(
    private _formPresenterService : FormPresenterService
  ) { 
    this.myForm = this._formPresenterService.createForm();
    this.submitted = false;
    this.aadharPattern = AADHAR_PATTERN;
    this.pancardPattern = PANCARD_PATTERN;
  }

  ngOnInit(): void {
    this.myForm.get("age")?.valueChanges.subscribe((age) => {
      this.enteredAge = age;
      if (age >= 15 && age <18){
        this.myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(AADHAR_PATTERN)])
        this.myForm.get("documentNumber")?.updateValueAndValidity();
        console.log("you are between 15-18");
        
      }
      else if (age >= 18){
        this.myForm.get("documentNumber")?.setValidators([Validators.required, Validators.pattern(PANCARD_PATTERN)])
        this.myForm.get("documentNumber")?.updateValueAndValidity();
        console.log("you are 18 or more");
      }
      else {
        this.myForm.get("documentNumber")?.setValidators([Validators.required])
        this.myForm.get("documentNumber")?.updateValueAndValidity();   
        console.log("you are less than 15");
        
      }
    })
  }
 public onSubmit(){
  this.submitted = true;
  console.log(this.myForm);
 }
 
}
