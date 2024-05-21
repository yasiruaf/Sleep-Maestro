import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesOverviewPage } from './categories-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesOverviewPageRoutingModule {}
