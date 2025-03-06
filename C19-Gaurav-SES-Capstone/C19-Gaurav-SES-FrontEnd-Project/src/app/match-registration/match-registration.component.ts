import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchServices } from '../../../services/matchservice';

import { Router } from '@angular/router';
import { PlayerServices } from '../../../services/playerservice';

@Component({
  selector: 'app-match-registration',
  templateUrl: './match-registration.component.html',
  styleUrls: ['./match-registration.component.css'],
})
export class MatchRegistrationComponent {
  matchForm: FormGroup;
  playerForm:FormGroup
  submitted = false;
  isLinear = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private matchService: MatchServices,
    private playerService:PlayerServices
    
  ) {
    this.matchForm = this.fb.group({
      matchName: ['', Validators.required],
      matchDate: ['', Validators.required],
      matchLocation: ['', Validators.required],
      team1Name: ['', Validators.required],
      team2Name: ['', Validators.required],
      tournamentName: ['', Validators.required],
    });

    this.playerForm = this.fb.group({
      playerName: ['', Validators.required],
      playerAge: ['', [Validators.required, Validators.min(1)]],
      teamName: ['', Validators.required],
      phoneNo:['',Validators.required]
      
    });
  }

  onSubmit(): void {
    if (this.matchForm.valid) {
      const formData = {
        ...this.matchForm.value,
        id: this.generateUniqueId(),
      };  

      
      this.matchService.adminenroll(formData).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);

          // this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error saving user data:', error);
          alert('Failed to save user data. Please try again.');
        },
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  generateUniqueId(): string {
    const lastCounter = Number(localStorage.getItem('currentMatchIdCounter')) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `M${uniqueNumber}`;
    localStorage.setItem('currentMatchIdCounter', (lastCounter + 1).toString());
    return id;
  }

  generateUniquePlayerId(): string {
    const lastCounter = Number(localStorage.getItem('currentPlayerIdCounter')) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `P${uniqueNumber}`;
    localStorage.setItem('currentPlayerIdCounter', (lastCounter + 1).toString());
    return id;
  }

  addMore(){
    this.router.navigate(['/home']); 
    
  }


  onPlayerSubmit(){
    if (this.playerForm.valid) {
      const formData = {
        ...this.playerForm.value,
        id: this.generateUniquePlayerId(),
      };

      
      this.playerService.playerEnroll(formData).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          this.playerForm.reset();
          
          
        },
        error: (error) => {
          console.error('Error saving user data:', error);
          alert('Failed to save user data. Please try again.');
        },
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
