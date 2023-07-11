import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {CarouselComponent} from "../SharedModule/components/carousel/carousel.component";
import {ProductCardComponent} from "../SharedModule/components/product-card/product-card.component";
import {SharedModule} from "../SharedModule/shared.module";
import {ProductListComponent} from "../SharedModule/components/product-list/product-list.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselComponent,
    ProductCardComponent,
    ProductListComponent,
    ToolbarComponent
  ]
})
export class HomeModule { }
