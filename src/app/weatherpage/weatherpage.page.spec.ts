import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherpagePage } from './weatherpage.page';

describe('WeatherpagePage', () => {
  let component: WeatherpagePage;
  let fixture: ComponentFixture<WeatherpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
