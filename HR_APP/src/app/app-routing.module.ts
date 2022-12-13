import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/add-employee/add-employee.component';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { DetailsCardComponent } from 'src/details-card/details-card.component';
import { LandingComponent } from 'src/landing/landing.component';

const routes: Routes = [
  {path: "", redirectTo:"/landing", pathMatch:"full"},
  {path: "edit/:id", component: EditPageComponent},
  {path: "add", component: AddEmployeeComponent},
  {path: "view", component: DetailsCardComponent},
  {path: "dash", component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
