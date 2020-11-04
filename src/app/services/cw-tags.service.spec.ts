import { TestBed } from '@angular/core/testing';

import { CwTagsService } from './cw-tags.service';

describe('CwTagsService', () => {
  let service: CwTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CwTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
