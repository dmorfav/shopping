import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {HttpClientModule} from "@angular/common/http";
import {ResCategoryService} from "../IO/res-category.service";
import {ICategory} from "../CoreModule/model/icategory";

describe('CategoryService', () => {
  let service: CategoryService;
  let resCategoryService: ResCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CategoryService);
    resCategoryService = TestBed.inject(ResCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load products', async () => {
    const mockCategoriesList: ICategory[] = [];
    spyOn(resCategoryService, 'getCategories').and.returnValue(Promise.resolve(mockCategoriesList));
    await service.loadCategories();
    expect(service.categories()).toEqual(mockCategoriesList);
  });});
