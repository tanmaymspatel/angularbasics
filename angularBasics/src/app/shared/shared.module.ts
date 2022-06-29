import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { PaginationComponent } from './components/pagination/pagination.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { OverlayComponent } from './components/overlay/overlay.component';




@NgModule({
  declarations: [
    PaginationComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule,
    PaginationComponent,
    DragDropModule,
    OverlayComponent
  ]
})
export class SharedModule { }
