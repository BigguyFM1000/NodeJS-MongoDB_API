import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "", redirectTo:"/dash", pathMatch:"full"},
  {path: "edit", component: EditPageComponent},
  {path: "add", component:AddEmployeeComponent},
  {path: "view/:_id", component: DetailsCardComponent},
  {path: "dash", component: LandingComponent},
  {path: "test", component: TestingComponent},
  {path:'add', component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule ],
  // declarations: [
  //   TestingComponent,
  //   LandingComponent,
  //   DetailsCardComponent,
  //   AddEmployeeComponent,
  //   EditPageComponent
  // ],
  bootstrap: [ AppComponent ]
})
export class AppRoutingModule { }
