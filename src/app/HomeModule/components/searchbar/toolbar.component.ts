import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CategoryService} from "../../../Services/category.service";

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
  readonly categoriesService: CategoryService = inject(CategoryService);

  expandSearch() {
    this.expandedSearchBar = !this.expandedSearchBar;
  }

  expandCategories() {
    this.expandedCategories = !this.expandedCategories;
  }

  ngOnInit(): void {
    this.categoriesService.loadCategories().then(() => {
      this.expandedCategories = true;
      setTimeout(() => {
        this.expandedCategories = false;
      }, 2000);
    });
  }
}
