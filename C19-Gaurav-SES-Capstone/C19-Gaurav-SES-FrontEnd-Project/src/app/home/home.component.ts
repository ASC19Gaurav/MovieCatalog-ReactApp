import { Component, OnInit } from '@angular/core';
import { MatchServices } from '../../../services/matchservice';


@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  matchess: string[] = [];
  constructor(private matchService: MatchServices) {}
  ngOnInit(): void {
    this.matchService.getUniqueMatches().subscribe((data) => {
      this.matchess=data;
     })
    
  }

  
}
