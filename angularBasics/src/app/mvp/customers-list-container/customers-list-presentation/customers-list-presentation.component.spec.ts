import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListPresentationComponent } from './customers-list-presentation.component';

describe('CustomersListPresentationComponent', () => {
  let component: CustomersListPresentationComponent;
  let fixture: ComponentFixture<CustomersListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
