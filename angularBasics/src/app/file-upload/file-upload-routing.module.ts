import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [{ path: '', component: FileUploadComponent,
children:[
  {
   path : 'upload' , component: FileUploadContainerComponent
  },
  {
   path : 'file-list' , component: FileListContainerComponent
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
