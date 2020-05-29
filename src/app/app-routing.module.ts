import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: '/indexes/index/Qli', pathMatch: 'full'},
  { path:'indexes', loadChildren: () => import('./views/index/index.module').then(m => m.IndexModule)},
  { path:'comparator', loadChildren: () => import('./views/compare/compare.module').then(m => m.CompareModule)},
  { path:'explorer', loadChildren: () => import('./views/explore/explore.module').then(m => m.ExploreModule)},
  { path:'aboutUs', loadChildren: () => import('./views/aboutUs/aboutUs.module').then(m => m.AboutUsModule)},
  { path:'**', redirectTo: '/indexes/index/Qli' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
