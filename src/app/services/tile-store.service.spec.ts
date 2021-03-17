import { TestBed } from '@angular/core/testing';

import { TileStoreService } from './tile-store.service';

describe('TileStoreService', () => {
  let service: TileStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
