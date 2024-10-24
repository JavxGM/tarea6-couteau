import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversitiespagePage } from './universitiespage.page';

describe('UniversitiespagePage', () => {
  let component: UniversitiespagePage;
  let fixture: ComponentFixture<UniversitiespagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiespagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
