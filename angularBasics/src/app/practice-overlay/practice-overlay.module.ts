import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeOverlayRoutingModule } from './practice-overlay-routing.module';
import { PracticeOverlayComponent } from './practice-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';


@NgModule({
  declarations: [
    PracticeOverlayComponent,
    FormOverlayComponent
  ],
  imports: [
    CommonModule,
    PracticeOverlayRoutingModule,
    SharedModule
  ]
})
export class PracticeOverlayModule { }
