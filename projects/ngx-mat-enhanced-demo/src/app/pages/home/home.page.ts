import {
  BreadCrumbOptions,
  BreadCrumbPath,
} from 'dist/ngx-mat-enhanced/lib/breadcrumb/breadcrumb.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { MediasService } from 'ngx-mat-enhanced';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public pagePathObject: any = [
    {
      fullPath: '/',
      label: 'Home',
    },
    {
      fullPath: '/test',
      label: 'Test page',
    },
  ];
  public breadcrumOptions: BreadCrumbOptions = {
    type: 'buttons',
    buttons: {
      activeItemColor: 'primary',
    },
    separator: {
      icon: 'keyboard_arrow_right',
    },
  };
  public pagePathObjectText: BreadCrumbPath[] = [
    {
      fullPath: '/',
      label: 'Home',
    },
    {
      fullPath: '/test',
      label: 'Test page',
    },
  ];
  public breadcrumOptionsText: any = {
    type: 'text',
    buttons: {
      enabled: false,
    },
    separator: {
      enabled: true,
      icon: 'arrow_forward',
    },
  };
  public mediaForm: FormGroup;
  public newFile!: File;

  constructor(private mediasService: MediasService, private fb: FormBuilder) {
    this.mediaForm = this.fb.group({
      input: [''],
    });
  }

  onFileInput(event: any) {
    const file = event.target.files[0] as File;
    this.newFile = file;

    this.mediaForm.reset();
  }

  public onDeleteSelected() {
    this.mediasService.deleteSelected();
  }
}
