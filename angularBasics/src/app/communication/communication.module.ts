import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    CommunicationComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule
  ]
})
export class CommunicationModule { }
