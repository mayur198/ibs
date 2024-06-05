import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

const material=[
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material 
  ]
})
export class MatModule { }
