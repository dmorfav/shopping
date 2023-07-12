import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SearchResultComponent } from './search-result.component';
import { ProductService } from '../../../Services/product.service';
import { IProduct } from '../../../CoreModule/model/iproduct';
import { WorkerCommunicationService } from '../../../Services/worker-communication.service';
import { APP_URL } from '../../../CoreModule/helpers/constants';

describe('SearchResultComponent', () => {
  let component: ComponentFixture<SearchResultComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockRouter: Partial<Router>;
  let mockProductService: Partial<ProductService>;
  let mockWorkerService: Partial<WorkerCommunicationService>;

  const mockProducts: IProduct[] = [
    // Mock products
  ];

  beforeEach(async () => {
    mockActivatedRoute = {
      queryParams: of({ title: 'mock title', category: 'mock category' })
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockProductService = {
      loadProductsBy: jasmine.createSpy('loadProductsBy').and.returnValue(Promise.resolve(mockProducts))
    };

    mockWorkerService = {
      processData: jasmine.createSpy('processData').and.returnValue(Promise.resolve()),
      categories: [] // Mock categories
    };

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: ProductService, useValue: mockProductService },
        { provide: WorkerCommunicationService, useValue: mockWorkerService }
      ]
    }).compileComponents();

    component = TestBed.createComponent(SearchResultComponent);
    component.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products and categories on ngOnInit', async () => {
    await component.componentInstance.ngOnInit();
    expect(mockProductService.loadProductsBy).toHaveBeenCalledWith({
      title: 'mock title',
      categoryId: 'mock category'
    });
    expect(mockWorkerService.processData).toHaveBeenCalledWith(mockProducts);
    expect(component.componentInstance.categories).toEqual(mockWorkerService.categories);
  });

  it('should load products by category on category filter change', async () => {
    const mockEvent = {
      target: { value: 'mock category' }
    };
    // @ts-ignore
    await component.componentInstance.onCategoryFilterChanged(mockEvent as Event);
    expect(mockProductService.loadProductsBy).toHaveBeenCalledWith(component.componentInstance.searchTerms);
  });

  it('should load products on enter key press', async () => {
    await component.componentInstance.onEnterPressed();
    expect(mockProductService.loadProductsBy).toHaveBeenCalledWith(component.componentInstance.searchTerms);
  });

  it('should navigate to home on goBack', async () => {
    await component.componentInstance.goBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith([APP_URL.HOME]);
  });
});
