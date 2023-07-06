import {Component, inject} from '@angular/core';
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.loadProducts();
  }
}
