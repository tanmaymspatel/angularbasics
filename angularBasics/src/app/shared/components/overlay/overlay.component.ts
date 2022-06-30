import { Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeForm } from 'src/app/employee/model/employee.model';
import { OverlayFormPresentationComponent } from 'src/app/employee/overlay-container/overlay-form-presentation/overlay-form-presentation.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Output() closeOverlay: EventEmitter<Event>;
  @Output() saveData: EventEmitter<EmployeeForm>;

  @ContentChild(OverlayFormPresentationComponent) overlayForm!: OverlayFormPresentationComponent;

  constructor() {
    this.closeOverlay = new EventEmitter();
    this.saveData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onButtonClick(buttonName: any) {
    if (buttonName === 'Cancel') this.closeOverlay.emit();
    if (buttonName === 'Save') this.saveData.emit(this.overlayForm.employeeForm.value);
  }
}
