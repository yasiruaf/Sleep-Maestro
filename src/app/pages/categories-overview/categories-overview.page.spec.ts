import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesOverviewPage } from './categories-overview.page';

describe('CategoriesOverviewPage', () => {
  let component: CategoriesOverviewPage;
  let fixture: ComponentFixture<CategoriesOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
