import { TestBed } from '@angular/core/testing';

import { LevelOfImpactService } from './level-of-impact.service';

describe('LevelOfImpactService', () => {
  let service: LevelOfImpactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelOfImpactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
