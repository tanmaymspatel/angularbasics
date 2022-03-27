import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", pathMatch:"full", redirectTo:"communication"
  },
  { path: 'communication', loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule) },
  { path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
