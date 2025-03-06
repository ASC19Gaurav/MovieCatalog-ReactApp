import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    NgbAlertModule,
    CommonModule,
    MenuComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  public title = 'Workshops Application';
  // public count = 0;
  public isOpen = true;

  public changeTitle() {
    this.title = 'My first Angular Application';
  }

  toggle() {
    console.log('toggle called');
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
