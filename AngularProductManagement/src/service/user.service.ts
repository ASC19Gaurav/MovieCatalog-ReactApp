import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user';  // JSON Server endpoint

  constructor(private http: HttpClient) {}

  // Get users from the JSON server
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Add a new user to the JSON server
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}