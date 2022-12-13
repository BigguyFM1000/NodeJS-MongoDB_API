import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/add-employee/add-employee.component';
import { EditPageComponent } from '../edit-page/edit-page.component';

const routes: Routes = [
  {path: "", redirectTo:"/app", pathMatch:"full"},
  {path: "edit/:id", component: EditPageComponent},
  {path: "add", component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
