import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditPageComponent } from 'src/app/edit-page/edit-page.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';
import { DetailsCardComponent } from 'src/app/details-card/details-card.component'; 
import { LandingComponent } from 'src/app/landing/landing.component';
import { TestingComponent } from './testing/testing.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    NavbarComponent,
    AddEmployeeComponent,
    DetailsCardComponent,
    LandingComponent,
    TestingComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
