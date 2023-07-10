import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ResCategoryService} from "../IO/res-category.service";
import {ICategory} from "../CoreModule/model/icategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly ioCategoryService: ResCategoryService = inject(ResCategoryService);
  private _categories: WritableSignal<ICategory[]|undefined> = signal<ICategory[]|undefined>(undefined);

  constructor() {
  }

  /**
   * Getter for categories
   */
  get categories(): WritableSignal<ICategory[] | undefined> {
    return this._categories;
  }

  /**
   * Setter for categories
   * @param value
   */
  set categories(value: WritableSignal<ICategory[]|undefined>) {
    this._categories = value;
  }

  /**
   * Load categories from the IO layer
   */
  async loadCategories(): Promise<void> {
    const categoriesList = await this.ioCategoryService.getCategories();
    this.categories.set(categoriesList);
  }
}
