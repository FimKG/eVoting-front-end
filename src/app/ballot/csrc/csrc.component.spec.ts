import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrcComponent } from './csrc.component';

describe('CsrcComponent', () => {
  let component: CsrcComponent;
  let fixture: ComponentFixture<CsrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
