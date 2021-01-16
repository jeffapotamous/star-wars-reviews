import { TestBed } from '@angular/core/testing';

import { BookCharacterService } from './book-character.service';

describe('BookCharacterService', () => {
  let service: BookCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
