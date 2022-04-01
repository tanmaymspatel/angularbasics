import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", pathMatch:"full", redirectTo:"communication"
  },
  { path: 'communication', loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule) },
  { path: 'mvp', loadChildren: () => import('./mvp/mvp.module').then(m => m.MvpModule) },
  // { path: 'overlay', loadChildren: () => import('./overlay/overlay.module').then(m => m.OverlayModule) },
  { path: 'overlay', loadChildren: () => import('./practice-overlay/practice-overlay.module').then(m => m.PracticeOverlayModule) },
  { path: 'file-upload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
