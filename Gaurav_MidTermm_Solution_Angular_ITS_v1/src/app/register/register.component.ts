import { Component } from '@angular/core';
import { FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Issue } from '../model/Issue';
import { IssueEnrollment } from '../service/issueservice';
@Component({
  selector: 'app-register',
 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  issueForm:FormGroup;
  issue:Issue[]=[];

  constructor(private fb:FormBuilder,private router:Router,private issueService:IssueEnrollment){
    this.issueForm = this.fb.group({
      
      // email:['',[Validators.required,Validators.email]]
      id:['',Validators.required],
      title:['',Validators.required],
      priorty:['',Validators.required],
      status:['',Validators.required],
      assignee:['',Validators.required],
      date:['',Validators.required],
      description:['',Validators.required]
    })
  }
  onSubmit(){
    if (this.issueForm.valid) {
      this.issueService.addIssue(this.issueForm.value).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          this.issueForm.reset();
          alert("Issue saved successfully!");
          
          //this.router.navigate(['/home']);
          
        },
        error: (error) => {
          console.error('There was an error saving the user data!', error);
        }
      });
  
    }

  }
}
