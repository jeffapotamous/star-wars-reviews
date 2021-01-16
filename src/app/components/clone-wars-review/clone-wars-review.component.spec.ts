import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneWarsReviewComponent } from './clone-wars-review.component';

describe('CloneWarsReviewComponent', () => {
  let component: CloneWarsReviewComponent;
  let fixture: ComponentFixture<CloneWarsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneWarsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneWarsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
