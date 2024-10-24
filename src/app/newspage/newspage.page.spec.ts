import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewspagePage } from './newspage.page';

describe('NewspagePage', () => {
  let component: NewspagePage;
  let fixture: ComponentFixture<NewspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
