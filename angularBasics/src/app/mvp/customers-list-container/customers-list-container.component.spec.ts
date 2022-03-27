import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListContainerComponent } from './customers-list-container.component';

describe('CustomersListContainerComponent', () => {
  let component: CustomersListContainerComponent;
  let fixture: ComponentFixture<CustomersListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
