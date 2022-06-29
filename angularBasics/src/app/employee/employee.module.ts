import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { OverlayContainerComponent } from './overlay-container/overlay-container.component';
import { OverlayListPresentationComponent } from './overlay-container/overlay-list-presentation/overlay-list-presentation.component';
import { OverlayFormPresentationComponent } from './overlay-container/overlay-form-presentation/overlay-form-presentation.component';
import { EmployeeService } from './services/employee.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    OverlayContainerComponent,
    OverlayListPresentationComponent,
    OverlayFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
  ],
  providers:[
    EmployeeService,
  ]
})
export class EmployeeModule { }
