import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { EmployeeditComponent } from './component/employeedit/employeedit.component';




const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {path:"employeelist", component:EmployeelistComponent},
  {path:"register", component:RegisterComponent},
  {path:"employeedit/:id", component:EmployeeditComponent},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
