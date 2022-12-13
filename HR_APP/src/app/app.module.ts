import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditPageComponent } from 'src/edit-page/edit-page.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AddEmployeeComponent } from 'src/add-employee/add-employee.component';
import { DetailsCardComponent } from 'src/details-card/details-card.component'; 
import { LandingComponent } from 'src/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    NavbarComponent,
    AddEmployeeComponent,
    DetailsCardComponent,
    LandingComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
