import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileDragAndDropDirective } from './file-drag-and-drop.directive';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent,
    FileDragAndDropDirective
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
