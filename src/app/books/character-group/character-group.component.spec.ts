import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGroupComponent } from './character-group.component';

describe('CharacterGroupComponent', () => {
  let component: CharacterGroupComponent;
  let fixture: ComponentFixture<CharacterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
