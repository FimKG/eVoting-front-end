import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCSRCViewsComponent } from './admin-CSRC-views.component';

describe('AdminCSRCViewsComponent', () => {
  let component: AdminCSRCViewsComponent;
  let fixture: ComponentFixture<AdminCSRCViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCSRCViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCSRCViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
