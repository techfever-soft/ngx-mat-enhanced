import { BreadcrumbComponent } from './breadcrumb.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
