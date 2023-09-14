import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxMatEnhancedMedia } from './medias.interface';
import { MediasService } from './medias.service';
import { scaleAnimation } from './medias.animation';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngx-mat-enhanced-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss'],
  animations: [scaleAnimation],
})
export class MediasComponent {
  @Input('fileInput') public file!: File;
  @Input('draggableItems') public draggableItems: boolean = false;
  @Input('color') public color: 'primary' | 'accent' = 'primary';
  public mediasList!: NgxMatEnhancedMedia[];

  constructor(public mediasService: MediasService) {
    this.mediasService
      .getMediaList()
      .subscribe((res: NgxMatEnhancedMedia[]) => {
        this.mediasList = res;
      });
  }

  ngOnChanges(): void {
    if (this.file) {
      if (
        this.file.type === 'image/png' ||
        this.file.type === 'image/jpeg' ||
        this.file.type === 'image/svg' ||
        this.file.type === 'image/webp'
      ) {
        const reader = new FileReader();

        reader.onload = (event) => {
          const base64Data = event.target?.result as string;

          this.mediasService.pushMedia(<NgxMatEnhancedMedia>{
            type: 'image',
            selected: false,
            content: base64Data,
          });
        };

        reader.readAsDataURL(this.file);
      }
      if (
        this.file.type === 'text/plain' ||
        this.file.type === 'application/pdf'
      ) {
        this.mediasService.pushMedia(<NgxMatEnhancedMedia>{
          type: 'file',
          selected: false,
          content: this.file.type,
        });
      }
      if (this.file.type === 'audio/mpeg') {
        this.mediasService.pushMedia(<NgxMatEnhancedMedia>{
          type: 'audio',
          selected: false,
          content: this.file.type,
        });
      }
    }
  }

  public selectFile(file: NgxMatEnhancedMedia) {
    file.selected = !file.selected;
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mediasList, event.previousIndex, event.currentIndex);
  }
}
