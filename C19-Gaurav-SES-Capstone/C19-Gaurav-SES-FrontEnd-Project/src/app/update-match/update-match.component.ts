import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchServices } from '../../../services/matchservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Matches } from '../../../model/matches';

@Component({
  selector: 'app-update-match',

  templateUrl: './update-match.component.html',
  styleUrl: './update-match.component.css'
})
export class UpdateMatchComponent implements OnInit {
  matchUpdateForm: FormGroup;
  id:string = "";
  searchedMatch: Matches = {} as Matches;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private matchService: MatchServices,
    private route: ActivatedRoute
    
  ) {
    this.matchUpdateForm = this.fb.group({
      matchName: ['', Validators.required],
      matchDate: ['', Validators.required],
      matchLocation: ['', Validators.required],
      team1Name: ['', Validators.required],
      team2Name: ['', Validators.required],
      tournamentName: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.searchedMatch = data;
       
        this.matchUpdateForm.patchValue({
          matchName: data.matchName,
          matchDate: data.matchDate,
          matchLocation: data.matchLocation,
          team1Name: data.team1Name,
          team2Name: data.team2Name,
          tournamentName: data.tournamentName,
        });
      },
      (error) => console.log(error)
    );
  }
  

  onSubmit(): void {
    if (this.matchUpdateForm.valid) {
      this.matchService.updateMatch(this.id, this.matchUpdateForm.value).subscribe(
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
