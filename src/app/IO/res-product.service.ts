import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IProduct} from "../CoreModule/model/iproduct";
import {lastValueFrom} from "rxjs";
import {APP_URL} from "../CoreModule/helpers/constants";
import {IFilter} from "../CoreModule/model/ifilter";

@Injectable({
  providedIn: 'root'
})
export class ResProductService {

  private readonly http: HttpClient = inject(HttpClient);

  constructor() { }

  /**
   * Get all products
   */
  getProducts(filters?: IFilter): Promise<IProduct[]> {
    const params = this.createFilterParams(filters);
    return lastValueFrom(this.http.get<IProduct[]>(`${APP_URL.API_URL}/products`, {params}));
  }

  /**
   * Get a product by its id
   */
  getProductById(id: number): Promise<IProduct> {
    return lastValueFrom(this.http.get<IProduct>(`${APP_URL.API_URL}/products/${id}`));
  }

  /**
   * Create filter parameters from the filter object
   */
  private createFilterParams(filters?: IFilter): HttpParams {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params = params.set(key, value.toString());
        }
      });
    }
    return params;
  }
}
