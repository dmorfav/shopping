import {TestBed} from '@angular/core/testing';

import {ResCategoryService} from './res-category.service';
import {HttpClientModule} from "@angular/common/http";

describe('ResCategoryService', () => {
  let service: ResCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ResCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', (done: DoneFn) => {
    service.getCategories().then(res => {
      expect(res.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});
