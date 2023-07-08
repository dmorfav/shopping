import {Component, inject, Input} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {APP_URL} from "../../../CoreModule/helpers/constants";

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
  private readonly router: Router = inject(Router);

  async goToDetail(id: number): Promise<void> {
    console.log(``);
await this.router.navigate([`${APP_URL.DETAIL}/${id}`]);
  }

}
