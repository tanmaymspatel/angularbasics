import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeOverlayComponent } from './practice-overlay.component';

const routes: Routes = [{ path: '', component: PracticeOverlayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeOverlayRoutingModule { }
