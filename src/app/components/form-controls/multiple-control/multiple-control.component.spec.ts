import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleControlComponent } from './multiple-control.component';

describe('MultipleControlComponent', () => {
  let component: MultipleControlComponent;
  let fixture: ComponentFixture<MultipleControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
