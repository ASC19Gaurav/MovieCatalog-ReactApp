import { Injectable } from '@angular/core';
import { AdminUser } from '../model/admins';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    private selectedUserIdSource = new BehaviorSubject<string[]>([]);
    selectedUserId$ = this.selectedUserIdSource.asObservable();

  
  private adminUsersSource = new BehaviorSubject<AdminUser[]>([]);
  adminUsers$ = this.adminUsersSource.asObservable();

  setSelectedUserId(ids: string[]) {
    this.selectedUserIdSource.next(ids);
  }

  getSelectedUserId(): string[] {
    return this.selectedUserIdSource.getValue();
  }

  setAdminUsers(adminUsers: AdminUser[]): void {
    this.adminUsersSource.next([...adminUsers]); // Create a new reference for change detection
  }

  getAdminUsers(): AdminUser[] {
    return this.adminUsersSource.getValue();
  }
}
