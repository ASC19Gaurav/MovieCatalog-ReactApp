import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { MatchRegistrationComponent } from "./match-registration/match-registration.component";
import { MatchesComponent } from "./matches/matches.component";
import { UpdateMatchComponent } from "./update-match/update-match.component";
import { FullDetailsComponent } from "./full-details/full-details.component";
import { UpdatePlayerComponent } from "./update-player/update-player.component";
import { ViewAdminComponent } from "./view-admin/view-admin.component";
import { ViewAllMatchesComponent } from "./view-all-matches/view-all-matches.component";
import { AuthGuardService } from "../../services/authservice";
import { BookTicketsComponent } from "./book-tickets/book-tickets.component";
import { TicketsComponent } from "./tickets/tickets.component";




//import { AuthGuardService } from "./service/authservice";





const routes: Routes = [
    { path: '', component: LoginComponent },
    {path:'login',component:LoginComponent},
    { path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
    {path:'matchregistration',component:MatchRegistrationComponent,canActivate:[AuthGuardService]},
    { path: 'update/:id', component: UpdateMatchComponent,canActivate:[AuthGuardService] },
    {path:'matches/:tournamentName',component:MatchesComponent,canActivate:[AuthGuardService]},
    { path: 'fullDetail/:matchName/:team1Name/:team2Name', component: FullDetailsComponent,canActivate:[AuthGuardService] },
    { path: 'updatePlayer/:id', component: UpdatePlayerComponent,canActivate:[AuthGuardService] },
    { path: 'viewAdmins', component: ViewAdminComponent,canActivate:[AuthGuardService] },
    {path:'viewAllMatches',component:ViewAllMatchesComponent,canActivate:[AuthGuardService]},
    {path:'bookTicket',component:BookTicketsComponent,canActivate:[AuthGuardService]},
    {path:'tickets',component:TicketsComponent,canActivate:[AuthGuardService]}

  ];

@NgModule({
    
    imports:[RouterModule.forRoot(routes) ,CommonModule,BrowserModule],
    exports:[RouterModule]
})

export class AppRoutingModule{

}