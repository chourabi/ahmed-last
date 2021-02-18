import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [EmployeesComponent, ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class EmployeesModule { }
