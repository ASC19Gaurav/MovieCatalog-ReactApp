import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-add-user',
  standalone: true,
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  imports: [FormsModule]
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    const newUser: User = {
      name: form.value.name,
      age: form.value.age,
      salary: form.value.salary
    };

    this.userService.addUser(newUser).subscribe({
      next: () => {
        form.reset();  // Reset form after adding the user
        console.log('User added successfully');
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
  }
}
