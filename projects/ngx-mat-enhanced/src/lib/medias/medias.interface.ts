import { NgxMatEnhancedMediaType } from './medias.type';

export interface NgxMatEnhancedMedia {
  id: string;
  type: NgxMatEnhancedMediaType;
  selected: boolean;
  content: string | null;
  loading: boolean;
}
