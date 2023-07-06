import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {CarouselComponent} from "../SharedModule/components/carousel/carousel.component";
import {ProductCardComponent} from "../SharedModule/components/product-card/product-card.component";
import {ProductService} from "../Services/product.service";
import {ResProductService} from "../IO/res-product.service";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../SharedModule/shared.module";
import {ProductListComponent} from "../SharedModule/components/product-list/product-list.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [
    ProductService,
    ResProductService
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselComponent,
    HttpClientModule,
    ProductCardComponent,
    SharedModule,
    ProductListComponent,
    SearchbarComponent
  ]
})
export class HomeModule { }
