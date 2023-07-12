import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../../../Services/product.service';
import { of } from 'rxjs';
import { IProduct } from '../../../CoreModule/model/iproduct';
import { APP_URL } from '../../../CoreModule/helpers/constants';
import {ICategory} from "../../../CoreModule/model/icategory";

describe('ProductDetailComponent', () => {
  let component: ComponentFixture<ProductDetailComponent>;
  let mockProductService: Partial<ProductService>;
  let mockRouter: Partial<Router>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  const mockProduct: IProduct = {
    category: {} as ICategory, description: "", id: 0, images: [], price: 0, title: ""
    // Mock product data
  };

  beforeEach(async () => {
    mockProductService = {
      getProductById: jasmine.createSpy('getProductById').and.returnValue(Promise.resolve(mockProduct))
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockActivatedRoute = {
      paramMap: of({ get: (key: string) => 'mock-id' } as ParamMap)
    };

    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    component = TestBed.createComponent(ProductDetailComponent);
    component.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on goBack', async () => {
    await component.componentInstance.goBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith([APP_URL.HOME]);
  });
});
