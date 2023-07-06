import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ResProductService} from "../IO/res-product.service";
import {IProduct} from "../CoreModule/model/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly ioProductService: ResProductService = inject(ResProductService);
  private _products: WritableSignal<IProduct[]|undefined> = signal<IProduct[]|undefined>(undefined);

  constructor() {
  }

  /**
   * Getter for products
   */
  get products(): WritableSignal<IProduct[] | undefined> {
    return this._products;
  }

  /**
   * Setter for products
   * @param value
   */
  set products(value: WritableSignal<IProduct[]|undefined>) {
    this._products = value;
  }

  /**
   * Load products from the IO layer
   */
  async loadProducts(): Promise<void> {
    const productList = await this.ioProductService.getProducts();
    this.products.set(productList);
  }
}
