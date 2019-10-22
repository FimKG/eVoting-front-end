import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfcComponent } from './sfc.component';

describe('SfcComponent', () => {
  let component: SfcComponent;
  let fixture: ComponentFixture<SfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
