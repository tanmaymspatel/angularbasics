import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersFormPresentationComponent } from './customers-form-presentation.component';

describe('CustomersFormPresentationComponent', () => {
  let component: CustomersFormPresentationComponent;
  let fixture: ComponentFixture<CustomersFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
