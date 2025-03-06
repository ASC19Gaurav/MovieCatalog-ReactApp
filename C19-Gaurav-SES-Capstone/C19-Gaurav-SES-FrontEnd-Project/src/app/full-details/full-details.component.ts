import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerServices } from '../../../services/playerservice';
import { Player } from '../../../model/players';

@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrl: './full-details.component.css'
})
export class FullDetailsComponent implements OnInit{
  matchName!: string;
  team1Name!: string;
  team2Name!: string;
  team1players: Player[] = [];
  team2players: Player[]=[];

  constructor(private route: ActivatedRoute,private playerService:PlayerServices ,private router:Router) {
  
  }

  ngOnInit(): void {
    this.matchName = this.route.snapshot.paramMap.get('matchName')!;
    this.team1Name = this.route.snapshot.paramMap.get('team1Name')!;
    this.team2Name = this.route.snapshot.paramMap.get('team2Name')!;
    
    this.playerService.getTeamPlayer(this.team1Name).subscribe((data) => {
      this.team1players=data;
     })
     this.playerService.getTeamPlayer(this.team2Name).subscribe((data) => {
      this.team2players=data;
     })
 
 
  }

  updatePlayer(PlayerId: string | undefined): void {
    if (PlayerId !== undefined) {
      this.router.navigate(['updatePlayer', PlayerId]);
    }
    else {
      console.log("Player Id is undefined");
    }
  }


deletePlayer(id:string){
  this.playerService.deleteTeams(id).subscribe({
    next: () => {
      console.log(`Match with ID ${id} deleted successfully`);
      this.getTeams(); 
    },
    error: (err) => {
      console.error(`Error deleting match with ID ${id}:`, err);
      alert('Failed to delete match. Please try again.');
    }
  });

}

getTeams(){
  this.playerService.getTeamPlayer(this.team1Name).subscribe((data) => {
    this.team1players=data;
   })
   this.playerService.getTeamPlayer(this.team2Name).subscribe((data) => {
    this.team2players=data;
   })
}
  

}
