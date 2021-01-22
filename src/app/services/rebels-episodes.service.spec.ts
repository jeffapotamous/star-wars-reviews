import { TestBed } from '@angular/core/testing';

import { RebelsEpisodesService } from './rebels-episodes.service';

describe('RebelsEpisodesService', () => {
  let service: RebelsEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebelsEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
