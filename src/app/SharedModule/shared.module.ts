import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "../Services/product.service";
import {ResProductService} from "../IO/res-product.service";
import {CategoryService} from "../Services/category.service";
import {ResCategoryService} from "../IO/res-category.service";
import {WorkerCommunicationService} from "../Services/worker-communication.service";


@NgModule({
  declarations: [],
  providers: [
    ProductService,
    ResProductService,
    CategoryService,
    ResCategoryService,
    WorkerCommunicationService
  ],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
