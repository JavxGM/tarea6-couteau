import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutpagePage } from './aboutpage.page';

describe('AboutpagePage', () => {
  let component: AboutpagePage;
  let fixture: ComponentFixture<AboutpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
