import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityArticleComponent } from './personality-article.component';

describe('PersonalityArticleComponent', () => {
  let component: PersonalityArticleComponent;
  let fixture: ComponentFixture<PersonalityArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
