import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ResProductService } from "../IO/res-product.service";
import { IProduct } from "../CoreModule/model/iproduct";
import { WorkerCommunicationService } from "./worker-communication.service";
import { IFilter } from "../CoreModule/model/ifilter";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly ioProductService: ResProductService = inject(ResProductService);
  private readonly workerService: WorkerCommunicationService = inject(WorkerCommunicationService);
  private _products: WritableSignal<IProduct[] | undefined> = signal<IProduct[] | undefined>(undefined);

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
  set products(value: WritableSignal<IProduct[] | undefined>) {
    this._products = value;
  }

  /**
   * Load products from the IO layer
   */
  async loadProducts(): Promise<void> {
    const productList = await this.ioProductService.getProducts();
    await this.workerService.processData(productList);
    await this.updatePricesOfCategoryTwoProducts(productList);
    this.products.set(productList);
  }

  /**
   * Update prices of category 2 products in the background
   * @param products
   */
  private async updatePricesOfCategoryTwoProducts(products: IProduct[]): Promise<void> {
    const requests: Promise<void>[] = [];

    products.forEach(product => {
      if (product.category.id === 2) {
        const request = this.ioProductService.getProductById(product.id).then(updatedProduct => {
          product.price = updatedProduct.price;
        });
        requests.push(request);
      }
    });

    await Promise.all(requests);
  }

  /**
   * Load products from the IO layer by filters
   * @param filters
   */
  async loadProductsBy(filters: IFilter): Promise<IProduct[] | []> {
    const productList = await this.ioProductService.getProducts(filters);
    await this.updatePricesOfCategoryTwoProducts(productList);
    return productList;

  }

  /**
   * Get a product detail
   */
  async getProductById(id: number): Promise<IProduct | undefined> {
    return this.ioProductService.getProductById(id);
  }
}
