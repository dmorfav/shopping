import {Component, Input} from '@angular/core';
import {IProduct} from "../../../CoreModule/model/iproduct";
import {ProductCardComponent} from "../product-card/product-card.component";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    ProductCardComponent,
    NgIf,
    NgForOf,
    NgTemplateOutlet
  ],
  standalone: true
})
export class ProductListComponent {

  @Input() products: IProduct[] | undefined;
}
