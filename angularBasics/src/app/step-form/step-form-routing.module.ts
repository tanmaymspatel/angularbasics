import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepFormComponent } from './step-form.component';

const routes: Routes = [{ path: '', component: StepFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepFormRoutingModule { }
