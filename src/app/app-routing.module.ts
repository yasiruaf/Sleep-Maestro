import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'session-details/:id',
    loadChildren: () => import('./pages/session-details/session-details.module').then( m => m.SessionDetailsPageModule)
  },
  {
    path: 'categories-overview',
    loadChildren: () => import('./pages/categories-overview/categories-overview.module').then( m => m.CategoriesOverviewPageModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./pages/author/author.module').then( m => m.AuthorPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
