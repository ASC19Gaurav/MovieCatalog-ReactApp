import { Component } from '@angular/core';
import { AuthGuardService } from '../service/authservice';

@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authservice:AuthGuardService){

  }

  Logout(){
    this.authservice.logout()
  }
}
