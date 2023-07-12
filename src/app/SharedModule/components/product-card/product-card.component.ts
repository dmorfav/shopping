import {Component, inject, Input} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {APP_URL} from "../../../CoreModule/helpers/constants";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    SlicePipe,
    NgOptimizedImage,
    CarouselComponent
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

  constructor() {
    // TODO remove before production send
    console.log(this.images);
  }

  async goToDetail(id: number): Promise<void> {
    await this.router.navigate([`${APP_URL.DETAIL}/${id}`]);
  }

}
