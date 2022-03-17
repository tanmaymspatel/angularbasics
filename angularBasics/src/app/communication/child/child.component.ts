
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name : string;
  @Output() cityName: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  cityValue(val : string) {
    console.log(val);
    this.cityName.emit(val);
  }

}
