import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiInfoComponent } from './api-info/api-info.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }