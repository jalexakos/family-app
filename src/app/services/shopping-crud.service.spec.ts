import { TestBed } from '@angular/core/testing';

import { ShoppingCrudService } from './shopping-crud.service';

describe('ShoppingCrudService', () => {
  let service: ShoppingCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
