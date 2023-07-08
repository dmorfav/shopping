import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_URL} from "./CoreModule/helpers/constants";

const routes: Routes = [
  {
    path: APP_URL.HOME,
    loadChildren: () =>import('./HomeModule/home.module').then(m => m.HomeModule)
  },
  {
    path: APP_URL.ERROR,
    loadChildren: () =>import('./CoreModule/core.module').then(m => m.CoreModule)
  },
  {
    path: `${APP_URL.DETAIL}/:id`,
    loadComponent: () => import('./SharedModule/components/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {path: '', redirectTo: APP_URL.HOME, pathMatch: 'full'},
  { path: '**', redirectTo: APP_URL.ERROR+'/'+APP_URL.ERROR_404, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
