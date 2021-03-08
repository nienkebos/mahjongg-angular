import { TestBed } from '@angular/core/testing';

import { MeldService } from './meld.service';

describe('MeldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeldService = TestBed.get(MeldService);
    expect(service).toBeTruthy();
  });
});
