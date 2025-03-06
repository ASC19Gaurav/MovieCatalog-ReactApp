import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServices } from '../../../services/adminservicee';
import { AdminUser } from '../../../model/admins';


@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  adminForm: FormGroup;
  loginAttempts = 0;
  isLockedOut = false; 
  lockoutTime = 0; 
  interval: any;

  users: AdminUser[] = [];
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminServices
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.adminForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      age: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  emailid = 'gaurav@gmail.com';
  password = 'password';

  ngOnInit() {
    const savedLockoutTime = parseInt(sessionStorage.getItem('lockoutTime') || '0', 10);
    const savedTimestamp = parseInt(sessionStorage.getItem('lockoutTimestamp') || '0', 10);
  
    if (savedTimestamp && savedLockoutTime) {
      const elapsed = Math.floor((Date.now() - savedTimestamp) / 1000);
      const remainingTime = savedLockoutTime - elapsed;
  
      if (remainingTime > 0) {
        this.activateLockout(); 
        this.lockoutTime = remainingTime;
      } else {
        this.resetLockout();
      }
    }
  }
  

  onLoginSubmit() {
    if (this.isLockedOut) {
      alert(`Please wait ${this.lockoutTime} seconds before trying again.`);
      return;
    }
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.service.getAuthUsers().subscribe(
        (data) => {
          const user = data.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            
            
            sessionStorage.setItem('loggedin', 'yes');
            sessionStorage.setItem('userLoggedIn',user.name)
            this.router.navigate(['/home']);
            this.resetLoginAttempts();
          } else {
            alert("Invalid");
            this.handleFailedLogin();
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }

  handleFailedLogin() {
    this.loginAttempts++;
    if (this.loginAttempts >= 3) {
      this.activateLockout();
    } else {
      // alert(`Invalid login. ${3 - this.loginAttempts} attempts left.`);
    }
  }

  activateLockout() {
    this.isLockedOut = true;
    this.lockoutTime = 30;
    sessionStorage.setItem('lockoutTime', this.lockoutTime.toString());
    sessionStorage.setItem('lockoutTimestamp', Date.now().toString());
  
   
    this.interval = setInterval(() => {
      this.lockoutTime--;
      sessionStorage.setItem('lockoutTime', this.lockoutTime.toString()); 
      if (this.lockoutTime <= 0) {
        this.resetLockout();
      }
    }, 1000);
  }
  

  resetLockout() {
    clearInterval(this.interval);
    this.isLockedOut = false;
    this.lockoutTime = 0;
    this.loginAttempts = 0;
  
    sessionStorage.removeItem('lockoutTime');
    sessionStorage.removeItem('lockoutTimestamp');
  }
  

  resetLoginAttempts() {
    this.loginAttempts = 0;
  }





  onSubmit() {
    if (this.adminForm.valid) {
      const formData = {
        ...this.adminForm.value,
        id: this.generateUniqueId(),
      };
      
      this.service.adminenroll(formData).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          alert('User registered successfully!');
          this.adminForm.reset();
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
    const lastCounter = Number(localStorage.getItem('currentIdCounter')) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `A${uniqueNumber}`;
    localStorage.setItem('currentIdCounter', (lastCounter + 1).toString());
    return id;
  }
}
