import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from './fournisseur.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [FournisseurComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,
    FournisseurRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class FournisseurModule { }
