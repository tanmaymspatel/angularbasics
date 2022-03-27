import { TestBed } from '@angular/core/testing';

import { CustomersListPresenterService } from './customers-list-presenter.service';

describe('CustomersListPresenterService', () => {
  let service: CustomersListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
