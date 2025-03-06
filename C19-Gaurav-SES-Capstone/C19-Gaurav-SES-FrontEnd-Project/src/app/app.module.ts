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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MatchRegistrationComponent } from './match-registration/match-registration.component';
import { MatchesComponent } from './matches/matches.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { FullDetailsComponent } from './full-details/full-details.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { BottomSheet, ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewAllMatchesComponent } from './view-all-matches/view-all-matches.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    UpdatePlayerComponent,
    MatchRegistrationComponent,
    MatchesComponent,
    UpdateMatchComponent,
    FullDetailsComponent,
    ViewAdminComponent,
    BottomSheet,
    ViewAllMatchesComponent,
    BookTicketsComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpClient, provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
