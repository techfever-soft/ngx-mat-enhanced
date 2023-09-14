import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbOptions, BreadCrumbPath } from './breadcrumb.interface';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ngx-mat-enhanced-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input('path') public path!: BreadCrumbPath[];
  @Input('options') public options!: BreadCrumbOptions;

  constructor(private template: ElementRef, private router: Router) {
    this.template.nativeElement.classList.add('mdc-breadcrumb');
  }

  ngOnChanges(): void {
    this.path.forEach((item: any) => {
      if (this.router.url === item.fullPath) {
        item.active = true;
      }
    });
  }
}
