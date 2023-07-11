import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CategoryService} from "../../../Services/category.service";
import {ICategory} from "../../../CoreModule/model/icategory";
import {WorkerCommunicationService} from "../../../Services/worker-communication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class ToolbarComponent implements OnInit {
  expandedSearchBar = false;
  expandedCategories = false;
  categoryList?: ICategory[] = [];
  private readonly categoriesService: CategoryService = inject(CategoryService);
  private readonly workerService: WorkerCommunicationService = inject(WorkerCommunicationService);


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
}
