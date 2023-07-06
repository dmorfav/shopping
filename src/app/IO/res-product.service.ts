import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../CoreModule/model/iproduct";
import {lastValueFrom} from "rxjs";
import {APP_URL} from "../CoreModule/helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class ResProductService {

  private readonly http: HttpClient = inject(HttpClient);

  constructor() { }

  getProducts(): Promise<IProduct[]> {
    return lastValueFrom(this.http.get<IProduct[]>(`${APP_URL.API_URL}/products`));
  }
}