import { TestBed } from '@angular/core/testing';

import { HandStoreService } from './hand-store.service';

describe('HandStoreService', () => {
  let service: HandStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
