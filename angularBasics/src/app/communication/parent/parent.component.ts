import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public inputValue : string;
  public cities : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  passVal(value: string) {
    console.log(value);
    this.inputValue = value;
  }

  cityToParent(city : string){
    this.cities.push(city);
  }
}

