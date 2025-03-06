import { Component, OnInit } from '@angular/core';
import { AdminServices } from '../../../services/adminservicee'; // Adjust the path if necessary
import { AdminUser } from '../../../model/admins';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { SharedService } from '../../../services/sharedservice';

@Component({
  selector: 'app-view-admin',
  templateUrl: 'view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  adminUsers: AdminUser[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  showCheckboxes = false;

  constructor(
    private adminService: AdminServices,
    private bottomSheet: MatBottomSheet,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.fetchAdmins();
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet);
  }

  fetchAdmins(): void {
    this.adminService.getAuthUsers().subscribe(
      (data: AdminUser[]) => {
        this.adminUsers = data;
        this.sharedService.setAdminUsers(data);
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch admin users.';
        console.error('Error fetching admin users:', error);
        this.isLoading = false;
      }
    );
  }

  onSelected(adminId: string, isChecked: boolean): void {
    const currentIds = this.sharedService.getSelectedUserId();
    if (isChecked) {
      this.sharedService.setSelectedUserId([...currentIds, adminId]);
    } else {
      this.sharedService.setSelectedUserId(
        currentIds.filter((id) => id !== adminId)
      );
    }
  }

  toggleCheckboxes(): void {
    this.showCheckboxes = !this.showCheckboxes;
    if (!this.showCheckboxes) {
      this.sharedService.setSelectedUserId([]);
    }
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
  styleUrls: ['bottom-sheet.css']
})
export class BottomSheet {
  deleteForm: FormGroup;
  selectedUserIds: string[] = [];
  adminUsers: AdminUser[] = [];
  superAdminEmail:string ="gaurav@singh.com";
  superAdminPassword:string="password";

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private adminService: AdminServices,
    private bottomSheetRef: MatBottomSheetRef<BottomSheet>
  ) {
    this.deleteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.selectedUserIds = this.sharedService.getSelectedUserId();
    this.adminUsers = this.sharedService.getAdminUsers();
  }

  confirmDelete(): void {
    const email = this.deleteForm.get('email')?.value;
    const password = this.deleteForm.get('password')?.value;
    if(email==this.superAdminEmail && password==this.superAdminPassword){
      if (this.deleteForm.valid) {
        console.log('Selected User IDs:', this.selectedUserIds);
    
        
        this.selectedUserIds.forEach((id) => {
          this.adminService.deleteAdmin(id).subscribe(
            () => {
              
              this.adminUsers = this.adminUsers.filter((admin) => admin.id !== id);
              this.sharedService.setAdminUsers(this.adminUsers); 
              
              console.log(`Admin with ID ${id} deleted successfully.`);
            },
            (error) => {
              console.error(`Error deleting admin with ID ${id}:`, error);
            }
          );
        });
    
        
        this.sharedService.setSelectedUserId([]);
        this.bottomSheetRef.dismiss(); 
        window.location.reload();

      } else {
        console.log("Invalid form");
      }
    }
    else{
      console.log("wrong super admin email or password");
    }

    
  }
}  