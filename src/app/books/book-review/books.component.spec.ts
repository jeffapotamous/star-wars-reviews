import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewComponent } from './books.component';

describe('BooksReviewComponent', () => {
  let component: BookReviewComponent;
  let fixture: ComponentFixture<BookReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
