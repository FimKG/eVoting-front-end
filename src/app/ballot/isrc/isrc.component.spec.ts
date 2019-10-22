import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrcComponent } from './isrc.component';

describe('IsrcComponent', () => {
  let component: IsrcComponent;
  let fixture: ComponentFixture<IsrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
