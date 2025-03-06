import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';  // Import FormsModule
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,  // Enable standalone component
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  imports: [FormsModule]  // Import FormsModule here
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  // Method to handle form submission
  onSubmit(form: NgForm) {
    const newUser: User = {
      name: form.value.name,
      age: form.value.age,
      salary: form.value.salary
    };

    this.userService.addUser(newUser).subscribe(() => {
      form.reset();  // Reset form after adding the user
      console.log('User added successfully');
    });
  }
}