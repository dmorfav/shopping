import { TestBed } from '@angular/core/testing';

import { ResProductService } from './res-product.service';
import {HttpClientModule} from "@angular/common/http";

describe('ResProductService', () => {
  let resProductService: ResProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    });

    resProductService = TestBed.inject(ResProductService);
  });
  it('should be created', () => {
    expect(resProductService).toBeTruthy();
  });

  it('should fetch products',(done: DoneFn) => {
   resProductService.getProducts().then(res => {
     expect(res.length).toBeGreaterThanOrEqual(0);
     done();
   });
  });
});
