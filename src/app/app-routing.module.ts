import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'fournisseur', loadChildren: () => import('./fournisseur/fournisseur.module').then(m => m.FournisseurModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
