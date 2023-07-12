import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from "../../../Services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {APP_URL} from "../../../CoreModule/helpers/constants";
import {IProduct} from "../../../CoreModule/model/iproduct";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [
    NgForOf,
    CurrencyPipe,
    CarouselComponent
  ],
  standalone: true
})
export class ProductDetailComponent implements OnInit{
  private readonly productService: ProductService = inject(ProductService);
  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  protected product: IProduct | undefined;

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(async (params: ParamMap) => {
        this.product = await this.productService.getProductById(parseInt(<string>params.get('id')));
      });
    }catch (e) {
      console.error(e);
      await this.goBack();
    }
  }

  async goBack(): Promise<void> {
    await this.router.navigate([APP_URL.HOME]);
  }
}
