import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './app.material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AppComponent,HomeComponent,NavbarComponent,DashboardComponent,RegisterComponent,LoginComponent,UpdateComponent,SignupComponent],
  imports: [BrowserModule, BrowserAnimationsModule,CommonModule,MaterialModule,RouterModule,AppRoutingModule,ReactiveFormsModule,FormsModule],
  providers:[HttpClient,provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
