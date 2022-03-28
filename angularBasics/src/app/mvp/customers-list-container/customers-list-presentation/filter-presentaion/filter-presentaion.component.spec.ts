import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPresentaionComponent } from './filter-presentaion.component';

describe('FilterPresentaionComponent', () => {
  let component: FilterPresentaionComponent;
  let fixture: ComponentFixture<FilterPresentaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPresentaionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPresentaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
