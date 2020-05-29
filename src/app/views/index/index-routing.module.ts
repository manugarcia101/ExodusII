import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexesComponent } from './indexes/indexes.component';


const routes: Routes = [
  { path: 'index/:id', component: IndexesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }