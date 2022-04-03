import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [{ path: '', component: FileUploadComponent,
children:[
  {
   path : 'upload' , component: FileUploadPresentationComponent
  },
  {
    path:'', pathMatch:'full', redirectTo:'upload'
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
