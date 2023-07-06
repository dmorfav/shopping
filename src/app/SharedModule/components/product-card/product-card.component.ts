import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    SlicePipe,
    NgOptimizedImage
  ]
})
export class ProductCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() price!: number;
  @Input() description!: string;
  @Input() category!: string;
  @Input() images!: string[];
  protected readonly name = name;
}
