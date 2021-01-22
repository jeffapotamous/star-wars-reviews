import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebelsReviewComponent } from './rebels-review.component';

describe('RebelsReviewComponent', () => {
  let component: RebelsReviewComponent;
  let fixture: ComponentFixture<RebelsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebelsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RebelsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
