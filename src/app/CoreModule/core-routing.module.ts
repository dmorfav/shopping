import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_URL} from "./helpers/constants";

const routes: Routes = [
  {
    path: APP_URL.ERROR_404,
    loadComponent: () => import('./Errors/error404/error404.component').then(m => m.Error404Component)
  },
  {
    path: APP_URL.ERROR_500,
    loadComponent: () => import('./Errors/error500/error500.component').then(m => m.Error500Component)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
