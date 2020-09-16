import { TestBed } from '@angular/core/testing';

import { BeaCrudService } from './bea-crud.service';

describe('BeaCrudService', () => {
  let service: BeaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
