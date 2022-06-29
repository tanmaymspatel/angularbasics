import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayFormPresenterService } from '../overlay-form-presenter/overlay-form-presenter.service';

@Component({
  selector: 'app-overlay-form-presentation',
  templateUrl: './overlay-form-presentation.component.html',
  styleUrls: ['./overlay-form-presentation.component.scss'],
  viewProviders: [OverlayFormPresenterService],
})
export class OverlayFormPresentationComponent implements OnInit {

  public employeeForm: FormGroup;
  public submitted: boolean;
  constructor(
    private _overlayFormPresenterService: OverlayFormPresenterService
  ) {
    this.employeeForm = this._overlayFormPresenterService.createForm();
    this.submitted = false;
  }

  ngOnInit(): void {
  }



}
