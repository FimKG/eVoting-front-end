import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSRCViewComponent } from './admin-SRC-view.component';

describe('AdminSRCViewComponent', () => {
  let component: AdminSRCViewComponent;
  let fixture: ComponentFixture<AdminSRCViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSRCViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSRCViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
