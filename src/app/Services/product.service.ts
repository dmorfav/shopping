import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ResProductService} from "../IO/res-product.service";
import {IProduct} from "../CoreModule/model/iproduct";
import {WorkerCommunicationService} from "./worker-communication.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly ioProductService: ResProductService = inject(ResProductService);
  private readonly workerService: WorkerCommunicationService = inject(WorkerCommunicationService);
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
    await this.workerService.processData(productList);
  }

  /**
   * Get a product by its id
   */
  async getProductById(id: number): Promise<IProduct | undefined> {
    return this.ioProductService.getProductById(id);
  }
}
