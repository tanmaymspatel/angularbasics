import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../person.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public people: Person[] = [];
  public selectedPeople = [];

  // reactive form
  public myForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.myForm = this.buildForm();
  }

  ngOnInit(): void {

    this.people =
    [
      {
          'id': 1,
          'name': 'Karyn Wright',
      },
      {
          'id': 2,
          'name': 'Karyn Hello',
      },
      {
          'id': 3,
          'name': 'Royal Wright',
      },
      {
          'id': 4,
          'name': 'Karyn height',
      },
      {
          'id': 5,
          'name': 'Karyn Sheth',
      },
      
  ]
}

private buildForm(){
  return this.fb.group({
    firstName:[""],
    person:[""]
  })
}

public onSubmit(){
  console.log(this.myForm.value);
  
}
}
