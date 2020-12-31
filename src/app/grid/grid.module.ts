import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
  ],
  exports: [
    GridComponent,
  ]
})
export class GridModule { }
