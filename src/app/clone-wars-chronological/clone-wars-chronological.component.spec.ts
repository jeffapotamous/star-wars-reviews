import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneWarsChronologicalComponent } from './clone-wars-chronological.component';

describe('CloneWarsChronologicalComponent', () => {
  let component: CloneWarsChronologicalComponent;
  let fixture: ComponentFixture<CloneWarsChronologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneWarsChronologicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneWarsChronologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
