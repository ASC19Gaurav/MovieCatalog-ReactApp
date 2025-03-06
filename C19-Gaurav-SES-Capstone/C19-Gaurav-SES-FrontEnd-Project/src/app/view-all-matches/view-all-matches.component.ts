import { Component, OnInit } from '@angular/core';
import { Matches } from '../../../model/matches';
import { MatchServices } from '../../../services/matchservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-matches',
  templateUrl: './view-all-matches.component.html',
  styleUrl: './view-all-matches.component.css'
})
export class ViewAllMatchesComponent implements OnInit {
  matchess: Matches[] = [];
  searchQuery: string = '';
  searchPerformed = false;

  constructor(private matchService: MatchServices,private router:Router) {}

  ngOnInit(): void {
    this.matchService.getAuthUsers().subscribe((data) => {
      this.matchess=data;
     })
      
  }
  getMatches(){
    this.matchService.getAuthUsers().subscribe((data) => {
      this.matchess=data;
     })
  }
  deleteMatch(id: string): void {
    this.matchService.deleteMatch(id).subscribe({
      next: () => {
        console.log(`Match with ID ${id} deleted successfully`);
        this.getMatches(); 
      },
      error: (err) => {
        console.error(`Error deleting match with ID ${id}:`, err);
        alert('Failed to delete match. Please try again.');
      }
    });
  }
  fullDetails(matchName:string,team1Name:string,team2Name:string){
    this.router.navigate(["fullDetail",matchName,team1Name,team2Name])
  }

  updateMatch(matchId: string | undefined): void {
    if (matchId !== undefined) {
      this.router.navigate(['update', matchId]);
    }
    else {
      console.log("Match Id is undefined");
    }
  }
  onSearch() {
    console.log('Searching for:', this.searchQuery);
    if (this.searchQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
    }
  
    this.matchService.searchAdmins(this.searchQuery).subscribe(
      (data) => {
        this.matchess = data;
        this.searchPerformed = true;
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.searchPerformed = true;
      }
    );
  
  }
}
