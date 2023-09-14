# 🔛 ngx-mat-enhanced

An Angular 16+ library for custom extended **Material** components

## Features

[x] **Medias gallery Component** : Upload your files and preview them using an horizontal list

[x] **Breadcrumbs Component**

[ ] **Bottom-bar Component**

[ ] **Headers Component**

[ ] **Surveys Component**

[ ] **Reusable Cards Component**

[ ] **Inside-App Notifications Component**

[ ] **Inline-comments Component**

[ ] **Nested-comments Component**

## Getting started

`ng add @angular/material`

`npm i -s ngx-mat-enhanced`

## Components

<details>
  <summary>Medias gallery Component</summary>
  
  ```html
  <ngx-mat-enhanced-medias [fileInput]="newFile" color="accent" [draggableItems]="true"></ngx-mat-enhanced-medias>

  <form [formGroup]="mediaForm">
    <input type="file" formControlName="input" (change)="onFileInput($event)" />
  </form>

  <button (click)="onDeleteSelected()">delete selection</button>

  ```

  ```typescript
  import { Component, ViewChild } from "@angular/core";
  import { FormBuilder, FormGroup } from "@angular/forms";
  import { MediasService } from "ngx-mat-enhanced";

  @Component({
    selector: "app-medias",
    templateUrl: "./medias.component.html",
    styleUrls: ["./medias.component.scss"],
  })
  export class MediasComponent {
    public mediaForm: FormGroup;
    public newFile!: File;

    constructor(private mediasService: MediasService, private fb: FormBuilder) {
      this.mediaForm = this.fb.group({
        input: [""],
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
  ````

</details>

<details>
  <summary>Breadcrumb Component</summary>
  
  ```html
  <ngx-mat-enhanced-breadcrumb
    [path]="pagePathObject"
    [options]="breadcrumOptions"
  ></ngx-mat-enhanced-breadcrumb>
  ```

  ```typescript
  public pagePathObject: BreadCrumbOptions = [
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
```

</details>
