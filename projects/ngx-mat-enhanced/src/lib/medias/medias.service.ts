import { BehaviorSubject, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { NgxMatEnhancedMedia } from './medias.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class MediasService {
  private mediaList: BehaviorSubject<NgxMatEnhancedMedia[]> =
    new BehaviorSubject<NgxMatEnhancedMedia[]>([]);
  private selectedMedias: BehaviorSubject<NgxMatEnhancedMedia[]> =
    new BehaviorSubject<NgxMatEnhancedMedia[]>([]);

  public getMediaList() {
    return this.mediaList.asObservable();
  }

  public getSelection() {
    return this.selectedMedias.asObservable().pipe(
      map((medias) => {
        return medias.find((media) => media.selected);
      })
    );
  }

  public setMediaList(list: NgxMatEnhancedMedia[]) {
    this.mediaList.next(list);
  }

  public pushMedia(media: NgxMatEnhancedMedia) {
    const mediaId = uuid();
    const newMedia = {
      ...media,
      id: mediaId,
      loading: true,
    };

    this.mediaList.getValue().push(newMedia);

    const mediaIndex = this.mediaList
      .getValue()
      .findIndex((mediaToSearch) => mediaToSearch.id === newMedia.id);

    setTimeout(() => {
      this.mediaList.getValue()[mediaIndex].loading = false;
    }, 500);
  }

  public deleteSelected() {
    const newMediaList = this.mediaList
      .getValue()
      .filter((media: NgxMatEnhancedMedia) => !media.selected);

    this.setMediaList(newMediaList);
  }
}
