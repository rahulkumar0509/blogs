import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHomepageComponent } from './food-homepage.component';

describe('FoodHomepageComponent', () => {
  let component: FoodHomepageComponent;
  let fixture: ComponentFixture<FoodHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
