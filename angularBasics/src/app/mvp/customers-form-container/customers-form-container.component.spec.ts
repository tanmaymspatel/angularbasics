import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersFormContainerComponent } from './customers-form-container.component';

describe('CustomersFormContainerComponent', () => {
  let component: CustomersFormContainerComponent;
  let fixture: ComponentFixture<CustomersFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
