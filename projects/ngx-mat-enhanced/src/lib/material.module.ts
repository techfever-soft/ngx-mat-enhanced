import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    DragDropModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    DragDropModule,
  ],
  providers: [],
})
export class MaterialModule {}
