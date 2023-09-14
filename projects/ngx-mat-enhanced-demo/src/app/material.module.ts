import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  exports: [MatButtonModule, MatIconModule, MatDividerModule],
})
export class MaterialModule {}
