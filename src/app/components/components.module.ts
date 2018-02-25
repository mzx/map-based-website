import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DropZoneDirective } from '../drop-zone.directive';
import { MaterialImportsModule } from '../material-imports/material-imports.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  declarations: [DropZoneDirective, FileUploadComponent]
})
export class ComponentsModule {
}
