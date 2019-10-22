import { TestBed } from '@angular/core/testing';

import { AppservService } from './appserv.service';

describe('AppservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppservService = TestBed.get(AppservService);
    expect(service).toBeTruthy();
  });
});
