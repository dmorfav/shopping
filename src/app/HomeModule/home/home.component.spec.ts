import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HttpClientModule} from "@angular/common/http";
import {CarouselComponent} from "../../SharedModule/components/carousel/carousel.component";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";
import {ProductListComponent} from "../../SharedModule/components/product-list/product-list.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CarouselComponent, ToolbarComponent, ProductListComponent],
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
