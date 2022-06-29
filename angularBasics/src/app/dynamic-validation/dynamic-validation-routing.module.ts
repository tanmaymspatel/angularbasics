import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicValidationComponent } from './dynamic-validation.component';

const routes: Routes = [{ path: '', component: DynamicValidationComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicValidationRoutingModule { }
