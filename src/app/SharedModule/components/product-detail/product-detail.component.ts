import {Component, inject, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../Services/product.service";
import {Router} from "@angular/router";
import {APP_URL} from "../../../CoreModule/helpers/constants";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true
})
export class ProductDetailComponent implements OnInit{
  @Input() readonly productId!: number;
  private readonly productService: ProductService = inject(ProductService);
  private readonly router: Router = inject(Router);

  async ngOnInit() {
    try {
      await this.productService.getProductById(this.productId);
    }catch (e) {
      console.error(e);
      await this.router.navigate([APP_URL.HOME])
    }
  }
}
