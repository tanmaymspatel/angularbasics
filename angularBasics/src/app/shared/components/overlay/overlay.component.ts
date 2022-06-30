import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() editData: EventEmitter<EmployeeForm>;
  @Input() formTitle: string;

  @ContentChild(OverlayFormPresentationComponent) overlayForm!: OverlayFormPresentationComponent;

  constructor() {
    this.closeOverlay = new EventEmitter();
    this.saveData = new EventEmitter();
    this.editData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onButtonClick(buttonName: any) {
    if (buttonName === 'Cancel') {
      this.closeOverlay.emit();
      this.overlayForm.employeeForm.reset();
    }

    if (buttonName === 'Save') {
      this.formTitle === "Edit Employee" ? this.editData.emit(this.overlayForm.employeeForm?.value) : this.saveData.emit(this.overlayForm.employeeForm?.value);
      this.overlayForm.employeeForm.reset();
    }
  }
}
