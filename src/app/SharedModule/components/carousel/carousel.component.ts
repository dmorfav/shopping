import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ]
})
export class CarouselComponent {
  @Input() imageUrls: string[] = [];

  constructor() {}

  navigateCarousel(index: number, direction?: string): void {
    const numImages = this.imageUrls.length;
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = (index - 1 + numImages) % numImages;
    } else if (direction === 'next') {
      newIndex = (index + 1) % numImages;
    } else {
      newIndex = index;
    }

    const radioId = `carousel-${newIndex + 1}`;
    const radioElem = document.getElementById(radioId) as HTMLInputElement;
    radioElem.checked = true;
  }
}
