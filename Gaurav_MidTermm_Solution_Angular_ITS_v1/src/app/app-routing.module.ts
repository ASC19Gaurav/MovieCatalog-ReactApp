import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { UpdateComponent } from "./update/update.component";
import { AuthGuardService } from "./service/authservice";
import { SignupComponent } from "./signup/signup.component";




const routes: Routes = [
    { path: '', component: LoginComponent },
    {path:'home',component:HomeComponent},
    {path:'register',component:RegisterComponent,canActivate:[AuthGuardService]},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
    {path: 'update', component: UpdateComponent,canActivate:[AuthGuardService]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
    
  ];

@NgModule({
    
    imports:[RouterModule.forRoot(routes) ,CommonModule,BrowserModule],
    exports:[RouterModule]
})

export class AppRoutingModule{

}