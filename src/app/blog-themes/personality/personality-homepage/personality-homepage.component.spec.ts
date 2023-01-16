import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityHomepageComponent } from './personality-homepage.component';

describe('PersonalityHomepageComponent', () => {
  let component: PersonalityHomepageComponent;
  let fixture: ComponentFixture<PersonalityHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
