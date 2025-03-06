import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerServices } from '../../../services/playerservice';
import { Player } from '../../../model/players';

@Component({
  selector: 'app-update-player',
  
  templateUrl: './update-player.component.html',
  styleUrl: './update-player.component.css'
})
export class UpdatePlayerComponent implements OnInit{

  playerForm: FormGroup;
  id:string = "";
  searchedPlayer: Player = {} as Player;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerService:PlayerServices,
    private route:ActivatedRoute
    
  ) {
    this.playerForm = this.fb.group({
      playerName: ['', Validators.required],
      playerAge: ['', [Validators.required, Validators.min(1)]],
      teamName: ['', Validators.required],
      phoneNumber:['',Validators.required]
      
    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        this.searchedPlayer = data;
       
        this.playerForm.patchValue({
          playerName: data.playerName,
          playerAge: data.playerAge,
          teamName: data.teamName,
          phoneNumber: data.phoneNo,
        });
      },
      (error) => console.log(error)
    );
      
  }


  onPlayerSubmit(){
    if (this.playerForm.valid) {
      this.playerService.updatePlayer(this.id, this.playerForm.value).subscribe(
        (response) => {
          console.log('Match updated successfully:', response);
          this.router.navigate(['/home']);  
        },
        (error) => {
          console.error('Error updating match:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }

  }
}
