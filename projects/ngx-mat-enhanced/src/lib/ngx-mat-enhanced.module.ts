import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { MaterialModule } from './material.module';
import { MediasModule } from './medias/medias.module';
import { NgModule } from '@angular/core';
import { NgxMatEnhancedComponent } from './ngx-mat-enhanced.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgxMatEnhancedComponent],
  imports: [MaterialModule, RouterModule, BreadcrumbModule, MediasModule],
  exports: [BreadcrumbModule, MediasModule],
})
export class NgxMatEnhancedModule {}
