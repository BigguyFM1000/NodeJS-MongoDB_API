import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { DetailsCardComponent } from '../details-card/details-card.component';
import { LandingComponent } from '../landing/landing.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", redirectTo:"/dash", pathMatch:"full"},
  {path: "edit/:_id", component: EditPageComponent},
  {path: "add", component: AddEmployeeComponent, outlet: "add"},
  {path: "details/:_id", component: DetailsCardComponent},
  {path: "dash", component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
