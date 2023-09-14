import { BreadcrumbModule, MediasModule } from 'ngx-mat-enhanced';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HomeRoutingModule,
    BreadcrumbModule,
    MediasModule,
  ],
})
export class HomeModule {}
