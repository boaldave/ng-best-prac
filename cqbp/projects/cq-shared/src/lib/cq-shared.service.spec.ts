import { TestBed } from '@angular/core/testing';

import { CqSharedService } from './cq-shared.service';

describe('CqSharedService', () => {
  let service: CqSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CqSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
