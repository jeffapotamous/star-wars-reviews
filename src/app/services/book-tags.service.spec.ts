import { TestBed } from '@angular/core/testing';

import { BookTagsService } from './book-tags.service';

describe('BookTagsService', () => {
  let service: BookTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
