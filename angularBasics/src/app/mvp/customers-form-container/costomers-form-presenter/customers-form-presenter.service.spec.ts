import { TestBed } from '@angular/core/testing';

import { CustomersFormPresenterService } from './customers-form-presenter.service';

describe('CustomersFormPresenterService', () => {
  let service: CustomersFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
