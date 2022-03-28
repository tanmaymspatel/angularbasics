import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.scss']
})
export class FormOverlayComponent implements OnInit {

  public overlayForm : FormGroup;

  constructor(private fb : FormBuilder ) { 
    this.overlayForm = this.buildForm();
  }

  ngOnInit(): void {
    
  }

  private buildForm(){
    return this.fb.group({
      firstName :['', Validators.required],
      lastName :['',Validators.required],
      age :['',Validators.required],
      contactNumber:['',Validators.required]
    })
  }

  
  
}
