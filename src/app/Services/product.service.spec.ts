import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {ResProductService} from "../IO/res-product.service";
import {IProduct} from "../SharedModule/model/iproduct";
import {HttpClientModule} from "@angular/common/http";

describe('ProductService', () => {
  let productService: ProductService;
  let resProductService: ResProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductService, ResProductService]
    });
    productService = TestBed.inject(ProductService);
    resProductService = TestBed.inject(ResProductService);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should load products', async () => {
    const mockProductList: IProduct[] = [];
    spyOn(resProductService, 'getProducts').and.returnValue(Promise.resolve(mockProductList));
    await productService.loadProducts();
    expect(productService.products()).toEqual(mockProductList);
  });
});
