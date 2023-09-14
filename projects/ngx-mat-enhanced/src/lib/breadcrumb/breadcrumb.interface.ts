export interface BreadCrumbOptions {
  type: 'text' | 'buttons';
  buttons?: {
    activeItemColor: string;
  };
  separator?: {
    icon?: string;
    text?: string;
  };
}

export interface BreadCrumbPath {
  active?: boolean;
  label: string;
  fullPath: string;
}
