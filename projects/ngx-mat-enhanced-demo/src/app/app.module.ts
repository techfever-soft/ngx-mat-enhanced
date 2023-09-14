import { BreadcrumbModule, MediasModule } from 'ngx-mat-enhanced';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestModule } from './pages/test/test.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    AppRoutingModule,
    BreadcrumbModule,
    MediasModule,
    TestModule,
    HomeModule,
  ],
})
export class AppModule {}
