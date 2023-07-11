import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import {NgOptimizedImage} from "@angular/common";

describe('ProductCardComponent', () => {
  let component: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgOptimizedImage],
      declarations: []
    });
    component = TestBed.createComponent(ProductCardComponent);
    component.componentInstance.id = 1;
    component.componentInstance.title = 'Producto de prueba';
    component.componentInstance.price = 9.99;
    component.componentInstance.description = 'Descripción del producto de prueba';
    component.componentInstance.category = 'Categoría de prueba';
    component.componentInstance.images = ['imagen1.jpg', 'imagen2.jpg'];
    component.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
