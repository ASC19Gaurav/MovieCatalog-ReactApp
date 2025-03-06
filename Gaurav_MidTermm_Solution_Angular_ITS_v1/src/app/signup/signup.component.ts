import { Component } from '@angular/core';
import { IssueEnrollment } from '../service/issueservice';
import { AdminUser } from '../model/admins';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userModel = new AdminUser('Gaurav', 21, 9812238475, 'gaurav@singh.com', 'Gaurav2');
  users: AdminUser[] = [];

  constructor(private adminenrolservice: IssueEnrollment,private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.adminenrolservice.adminenroll(this.userModel).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          form.reset();
          this.resetModel(); 
          alert('Success');
          this.router.navigate(['/login']);
          
        },
        error: (error) => {
          console.error('There was an error saving the user data!', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
    
  }

  resetModel() {
    this.userModel = new AdminUser('', 0, 0, '', '');
  }
}
