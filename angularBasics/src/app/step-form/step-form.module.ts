import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepFormRoutingModule } from './step-form-routing.module';
import { StepFormComponent } from './step-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StepFormComponent
  ],
  imports: [
    CommonModule,
    StepFormRoutingModule,
    SharedModule,
  ]
})
export class StepFormModule { }
