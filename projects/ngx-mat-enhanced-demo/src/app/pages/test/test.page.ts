import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
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
  public breadcrumOptions: any = {
    type: 'buttons',
    buttons: {
      enabled: true,
      raised: true,
      activeItemColor: 'primary',
    },
    separator: {
      enabled: true,
      icon: 'keyboard_arrow_right',
    },
  };

  public pagePathObjectText: any = [
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
}
