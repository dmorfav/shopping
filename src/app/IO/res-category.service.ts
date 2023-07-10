import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../CoreModule/model/iproduct";
import {lastValueFrom} from "rxjs";
import {APP_URL} from "../CoreModule/helpers/constants";
import {ICategory} from "../CoreModule/model/icategory";

@Injectable({
  providedIn: 'root'
})
export class ResCategoryService {
  private readonly http: HttpClient = inject(HttpClient);

  constructor() { }

  getCategories(): Promise<ICategory[]> {
    return lastValueFrom(this.http.get<ICategory[]>(`${APP_URL.API_URL}/categories`));
  }
}
