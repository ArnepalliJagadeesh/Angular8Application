import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeDetailsComponent} from '../app/employee/employee-details.component';
import { ProductDetailsComponent } from '../app/product/product-details.component';
const routes: Routes = [
{path:'Employee', component:EmployeeDetailsComponent },
{path:'Product', component:ProductDetailsComponent},
{path:'', component:EmployeeDetailsComponent},
{path:'**', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
