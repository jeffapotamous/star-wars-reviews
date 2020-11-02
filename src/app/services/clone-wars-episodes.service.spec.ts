import { TestBed } from '@angular/core/testing';

import { CloneWarsEpisodesService } from './clone-wars-episodes.service';

describe('CloneWarsEpisodesService', () => {
  let service: CloneWarsEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloneWarsEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
