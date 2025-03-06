import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/Issue';
import { IssueEnrollment } from '../service/issueservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  issues:Issue[]=[];
  showCheckboxes = false;
  showSearchbox =false;
  selectedUserId: string[] = [];
  searchvalue:string='';
  searchproperty:string='';
  constructor(private issueService:IssueEnrollment,private router:Router){

  }
  ngOnInit(): void {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data;
    })
  }

  toggleCheckboxes() {
    this.showCheckboxes = !this.showCheckboxes;

    if (!this.showCheckboxes) {
      this.selectedUserId = []; 
    }
  }

  onSelected(IssueId: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedUserId.push(IssueId);
    } else {
      this.selectedUserId = this.selectedUserId.filter(id => id !== IssueId); 
    }
  }

  deleteSelectedUsers() {
    console.log(this.selectedUserId);
    this.selectedUserId.forEach((id) => {
      this.issueService.deleteIssue(id).subscribe(() => {
        this.issues = this.issues.filter((issue) => issue.id !== id); 
      });
    });

    
    this.selectedUserId = [];
    this.showCheckboxes = false;
    
  }

  search(){
    this.showSearchbox=true;
    this.issueService.searchUser(this.searchvalue,this.searchproperty).subscribe({
      next: (data) => {
        console.log('Fetched users:', data);
        this.issues = data; 
      },
      error: (error) => {
        console.error('There was an error fetching the user data!', error);
      }
    });
  }

  
}
