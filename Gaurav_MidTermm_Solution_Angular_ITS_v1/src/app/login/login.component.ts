import { Component } from '@angular/core';
import { FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../service/authservice';
import { IssueEnrollment } from '../service/issueservice';



@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private service:IssueEnrollment){
    this.loginForm = this.fb.group({
      
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  emailid="gaurav@gmail.com";
  password="password";

  onSubmit(){
    if(this.loginForm.valid){
      const {email , password}=this.loginForm.value;
      this.service.getAuthUsers().subscribe(
        (data) => {
          
          const user = data.find((u) => u.email === email && u.password === password);

          if (user) {
            alert('Succesfully Login')
            sessionStorage.setItem('loggedin', 'yes');
            this.router.navigate(['/home']);
            
          } else {
            alert('Login Failed,Try Again')
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
         
        }
      );
     
    }
  }
}
