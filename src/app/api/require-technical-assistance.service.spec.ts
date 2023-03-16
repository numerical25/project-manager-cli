import { TestBed } from '@angular/core/testing';

import { RequireTechnicalAssistanceService } from './require-technical-assistance.service';

describe('RequireTechnicalAssistanceService', () => {
  let service: RequireTechnicalAssistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequireTechnicalAssistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
