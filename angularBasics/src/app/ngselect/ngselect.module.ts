import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgselectRoutingModule } from './ngselect-routing.module';
import { NgselectComponent } from './ngselect.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgselectComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    NgselectRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgselectModule { }
