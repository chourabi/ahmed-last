import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
