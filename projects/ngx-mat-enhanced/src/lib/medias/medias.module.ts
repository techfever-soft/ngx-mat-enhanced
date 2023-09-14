import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MediasComponent } from './medias.component';
import { MediasService } from './medias.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MediasComponent],
  declarations: [MediasComponent],
})
export class MediasModule {}
