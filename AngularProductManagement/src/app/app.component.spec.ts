import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;
  registrations: any[] = [];
  isFormVisible = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      age: [50, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      class: ['italian', Validators.required],
      date: ['', Validators.required],
      level: ['beginner', Validators.required],
      diet: ['no'],
      notes: ['']
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  showForm() {
    this.isFormVisible = true;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrations.push(this.registrationForm.value);
      this.resetForm();
    }
  }

  resetForm() {
    this.registrationForm.reset({
      age: 50,
      class: 'italian',
      level: 'beginner',
      diet: 'no'
    });
  }
}
