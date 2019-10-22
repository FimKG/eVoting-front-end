import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvoteComponent } from './postvote.component';

describe('PostvoteComponent', () => {
  let component: PostvoteComponent;
  let fixture: ComponentFixture<PostvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
