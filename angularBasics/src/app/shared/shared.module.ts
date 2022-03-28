import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
