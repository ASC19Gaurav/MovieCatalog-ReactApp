import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Issue } from '../model/Issue';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueEnrollment } from '../service/issueservice';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {updateForm: FormGroup;
  showInputField = false;
  showDropdownstatus = false;
  showDropdownpriorty = false;
  showDatePicker = false;
  
  ngOnInit(): void {
    
  }

  constructor(private issueservice: IssueEnrollment,private fb: FormBuilder,private router:Router) {
    
    this.updateForm = this.fb.group({
      id: [''],
      selectedField: [''],
      inputValue: ['']
    });
  }

  onFieldChange(event: any) {
    const selectedField = event.target.value;
    
    this.showInputField = this.showDropdownstatus = this.showDropdownpriorty = this.showDatePicker;

   
    switch (selectedField) {
      case 'title':
      
      case 'assignee':
      case 'discription':
        
        this.showInputField = true;
        break;
      case 'status':
        this.showDropdownstatus = true;
        break;
      case 'priorty':
        this.showDropdownpriorty = true;
        break;
      case 'date':
        this.showDatePicker = true;
        break;
      
    }
  }

  onSubmit() {
    const formData = this.updateForm.value;
    const id = this.updateForm.get('id')?.value;
    const selectedField = this.updateForm.get('selectedField')?.value;
    const updateValue = this.updateForm.get('inputValue')?.value;

    this.issueservice.updateUser(id,updateValue,selectedField).subscribe({
      next: () => {
          console.log('User updated successfully');
          this.router.navigate(['/dashboard']);
          alert('Updated')
      },
      error: (error) => {
          console.error('Update failed:', error);
          
        }
  });
}
}
