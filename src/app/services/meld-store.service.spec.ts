import { TestBed } from '@angular/core/testing';

import { MeldStoreService } from './meld-store.service';

describe('MeldStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeldStoreService = TestBed.get(MeldStoreService);
    expect(service).toBeTruthy();
  });
});
