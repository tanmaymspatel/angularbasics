import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';

import { FileDragAndDropDirective } from './file-drag-and-drop.directive';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileListPresentationComponent } from './file-list-container/file-list-presentation/file-list-presentation.component';
import { FileUploadService } from './services/file-upload.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FileUploadComponent,
    FileDragAndDropDirective,
    FileUploadContainerComponent,
    FileUploadPresentationComponent,
    FileListContainerComponent,
    FileListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ],
  providers:[FileUploadService]
})
export class FileUploadModule { }
