import { Component, OnInit,signal } from '@angular/core';
import { MatchServices } from '../../../services/matchservice';
import { Matches } from '../../../model/matches';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  readonly panelOpenState = signal(false);matches: any[] = []; 
  matchess: Matches[] = [];
   tournamentName!: string;
   searchQuery: string = '';
   searchPerformed = false;

  constructor(private matchService: MatchServices,private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tournamentName = params.get('tournamentName') || '';
      console.log('Tournament Name:', this.tournamentName);
    });

   this.matchService.getTournamentMatches(this.tournamentName).subscribe((data) => {
    this.matchess=data;
   })
    
}

deleteMatch(id: string): void {
  this.matchService.deleteMatch(id).subscribe({
    next: () => {
      console.log(`Match with ID ${id} deleted successfully`);
      this.getTournamentMatches(); // Refresh the match list
    },
    error: (err) => {
      console.error(`Error deleting match with ID ${id}:`, err);
      alert('Failed to delete match. Please try again.');
    }
  });
}

getTournamentMatches(){
  this.matchService.getTournamentMatches(this.tournamentName).subscribe((data) => {
    this.matchess=data;
   })
}

updateMatch(matchId: string | undefined): void {
  if (matchId !== undefined) {
    this.router.navigate(['update', matchId]);
  }
  else {
    console.log("Match Id is undefined");
  }
}

fullDetails(matchName:string,team1Name:string,team2Name:string){
  this.router.navigate(["fullDetail",matchName,team1Name,team2Name])
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
