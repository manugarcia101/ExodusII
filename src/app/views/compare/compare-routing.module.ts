import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparatorComponent } from './comparator/comparator.component';


const routes: Routes = [
  { path: 'compare', component: ComparatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }