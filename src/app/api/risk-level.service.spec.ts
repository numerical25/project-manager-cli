import { TestBed } from '@angular/core/testing';

import { RiskLevelService } from './risk-level.service';

describe('RiskLevelService', () => {
  let service: RiskLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
