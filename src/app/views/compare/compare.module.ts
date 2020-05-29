import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparatorComponent } from './comparator/comparator.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { SearchFilterPipeThree } from '../../shared/filter-pipe-three';
import { SearchFilterPipeTwo } from '../../shared/filter-pipe-two';


@NgModule({
  declarations: [
    ComparatorComponent,
    SearchFilterPipeThree,
    SearchFilterPipeTwo
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompareRoutingModule,
    ChartsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
  ]
})
export class CompareModule { }
