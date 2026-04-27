import { TestBed } from '@angular/core/testing';

import { Service123 } from './service123';

describe('Service123', () => {
  let service: Service123;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service123);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
