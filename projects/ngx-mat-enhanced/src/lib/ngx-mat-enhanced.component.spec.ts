import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatEnhancedComponent } from './ngx-mat-enhanced.component';

describe('NgxMatEnhancedComponent', () => {
  let component: NgxMatEnhancedComponent;
  let fixture: ComponentFixture<NgxMatEnhancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatEnhancedComponent]
    });
    fixture = TestBed.createComponent(NgxMatEnhancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
