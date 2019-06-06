import { TestBed } from '@angular/core/testing';

import { ArrItemService } from './arr-item.service';

describe('ArrItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrItemService = TestBed.get(ArrItemService);
    expect(service).toBeTruthy();
  });
});
