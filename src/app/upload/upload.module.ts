import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DropzoneDirective, UploaderComponent, UploadTaskComponent, FileListComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MaterialModule
  ]
})
export class UploadModule { }
