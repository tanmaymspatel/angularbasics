import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicValidationRoutingModule } from './dynamic-validation-routing.module';
import { DynamicValidationComponent } from './dynamic-validation.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { SharedModule } from '../shared/shared.module';
import { MaskingDirective } from './directive/masking.directive';


@NgModule({
  declarations: [
    DynamicValidationComponent,
    FormPresentationComponent,
    FormContainerComponent,
    MaskingDirective,
  ],
  imports: [
    CommonModule,
    DynamicValidationRoutingModule,
    SharedModule,
  ]
})
export class DynamicValidationModule { }
