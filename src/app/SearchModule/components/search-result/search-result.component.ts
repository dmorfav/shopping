import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../Services/product.service";
import {ProductListComponent} from "../../../SharedModule/components/product-list/product-list.component";
import {IProduct} from "../../../CoreModule/model/iproduct";
import {ToolbarComponent} from "../../../HomeModule/components/toolbar/toolbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ICategory} from "../../../CoreModule/model/icategory";
import {NgForOf} from "@angular/common";
import {IFilter} from "../../../CoreModule/model/ifilter";
import {WorkerCommunicationService} from "../../../Services/worker-communication.service";
import {APP_URL} from "../../../CoreModule/helpers/constants";

@Component({
  selector: 'app-search-result',
  standalone: true,
  templateUrl: './search-result.component.html',
  imports: [
    ProductListComponent,
    ToolbarComponent,
    ReactiveFormsModule,
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchTerms: IFilter = {} as IFilter;
  categories?: ICategory[];
  productList: IProduct[] = [];
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  private readonly productService: ProductService = inject(ProductService);
  private readonly workerService: WorkerCommunicationService = inject(WorkerCommunicationService);

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async (params) => {
      this.searchTerms.title = params['title'];
      await this.loadProductsBy();
    });
  }

  async onCategoryFilterChanged(event: Event): Promise<void> {
    // @ts-ignore
    const categoryId = event.target?.value;
    this.searchTerms.categoryId = categoryId === '-1' ? undefined : categoryId;
    await this.loadProductsBy();
  }

  async onEnterPressed(): Promise<void> {
    // @ts-ignore
      await this.loadProductsBy();
  }

  private async loadProductsBy(): Promise<void> {
    this.productList = await this.productService.loadProductsBy(this.searchTerms);
    await this.workerService.processData(this.productList);
    this.categories = this.workerService.categories;
  }


  async goBack(): Promise<void> {
    await this.router.navigate([APP_URL.HOME]);
  }
}
