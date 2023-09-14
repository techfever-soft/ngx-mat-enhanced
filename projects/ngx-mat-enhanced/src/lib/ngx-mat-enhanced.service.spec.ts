import { TestBed } from '@angular/core/testing';

import { NgxMatEnhancedService } from './ngx-mat-enhanced.service';

describe('NgxMatEnhancedService', () => {
  let service: NgxMatEnhancedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatEnhancedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
