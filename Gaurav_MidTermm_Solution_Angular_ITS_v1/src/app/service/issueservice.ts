import { Injectable } from "@angular/core";
import { Issue } from "../model/Issue";
import { Observable } from "rxjs";
import { map,switchMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { AdminUser } from "../model/admins";

@Injectable({
    providedIn:"root"
})

export class IssueEnrollment{
    private baseUrl ="http://localhost:3000/issues";
    private authUrl = 'http://localhost:3000/adminusers'

    constructor(private http:HttpClient){

    }
    addIssue(issue:Issue):Observable<any>{
        return this.http.post<any>(this.baseUrl,issue);
    }
    getIssues(){
        return this.http.get<Issue[]>(this.baseUrl);
    }
    deleteIssue(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
    searchUser(searchValue: string, searchProperty: string): Observable<Issue[]> {
        const lowerCaseSearchValue = searchValue.toLowerCase();  
    
        return this.http.get<Issue[]>(this.baseUrl).pipe(
            map((data: Issue[]) => {
                
                switch (searchProperty.toLowerCase()) {
                    case 'title':
                        return data.filter(issue => issue.title.toLowerCase().includes(lowerCaseSearchValue));
                    case 'status':
                        return data.filter(issue => issue.status.toLowerCase().includes(lowerCaseSearchValue));
                    case 'priorty': 
                        return data.filter(issue => issue.priorty.toLowerCase().includes(lowerCaseSearchValue));
                    case 'assignee':
                        return data.filter(issue => issue.assignee.toLowerCase().includes(lowerCaseSearchValue));
                    case 'description':
                        return data.filter(issue => issue.description.toLowerCase().includes(lowerCaseSearchValue));
                    default:
                        return data; 
                }
            })
        );
    }


    updateUser(id: number, updateValue: any, selectedField: string): Observable<any> {
        return this.http.get<Issue>(`${this.baseUrl}/${id}`).pipe(
            switchMap((issue) => {
                if (!issue) {
                    throw new Error(`User with ID ${id} not found.`);
                }
    
                // Update the specific field based on selectedField
                switch (selectedField) {
                    case 'title':
                        issue.title = updateValue;
                        break;
                    case 'status':
                        issue.status = updateValue;
                        break;
                    case 'priorty':
                        issue.priorty = updateValue;
                        break;
                    case 'description':
                        issue.description = updateValue;
                        break;
                    case 'date':
                        issue.date = updateValue;
                        break;
                        case 'assignee':
                        issue.assignee = updateValue;
                        break;
                    
                        
                    default:
                        throw new Error(`Invalid field: ${selectedField}`);
                }
    
                // Send the updated user object back to the server
                return this.http.put<Issue>(`${this.baseUrl}/${id}`, issue);
            })
        );
    }

    getAuthUsers(): Observable<AdminUser[]> {
        return this.http.get<AdminUser[]>(this.authUrl);
    }

    adminenroll(adminuser: AdminUser): Observable<any> {
        return this.http.post<any>(this.authUrl, adminuser);
    }
}