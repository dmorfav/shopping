import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CategoryService} from "../../../Services/category.service";
import {ICategory} from "../../../CoreModule/model/icategory";
import {WorkerCommunicationService} from "../../../Services/worker-communication.service";
import {FormsModule} from "@angular/forms";
import {Params, Router} from "@angular/router";
import {APP_URL} from "../../../CoreModule/helpers/constants";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class ToolbarComponent implements OnInit {
  expandedSearchBar = false;
  expandedCategories = false;
  categoryList?: ICategory[] = [];
  searchTerms: string = '';
  private readonly categoriesService: CategoryService = inject(CategoryService);
  private readonly workerService: WorkerCommunicationService = inject(WorkerCommunicationService);
  private readonly router: Router = inject(Router);


  ngOnInit(): void {
    // El método muestra las categorías tal cual vienen del API y luego las sustituye por las categorías ordenadas por precio medio
    this.categoriesService.loadCategories().then(() => {
      this.categoryList = this.categoriesService.categories()
      this.expandedCategories = true;
      setTimeout(() => {
        this.categoryList = this.workerService.categories;
        this.expandedCategories = false;
      }, 2000);
    });
  }

  expandSearch() {
    this.expandedSearchBar = !this.expandedSearchBar;
  }

  expandCategories() {
    this.expandedCategories = !this.expandedCategories;
  }

  async onEnterPressed(): Promise<void> {
    if (0 < this.searchTerms.length) {
      await this.goToSearch( {title: this.searchTerms});
    }
  }

  async searchByCategory(categoryId: number): Promise<void> {
    await this.goToSearch( {category: categoryId});
  }

  private async goToSearch(queryParams:Params): Promise<void> {
    await this.router.navigate([APP_URL.SEARCH], {queryParams});
  }
}
