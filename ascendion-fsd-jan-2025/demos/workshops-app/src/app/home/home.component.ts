import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public title = 'Workshops Application';
  // public count = 0;

  // public changeTitle() {
  //   this.title = 'My first Angular Application';
  //   ++this.count;
  // }
}
