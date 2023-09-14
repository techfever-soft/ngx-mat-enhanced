import { BreadcrumbModule } from 'ngx-mat-enhanced';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestPage } from './test.page';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [
    TestPage
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    BreadcrumbModule,
  ]
})
export class TestModule { }
