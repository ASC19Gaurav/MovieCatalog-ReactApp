import { Injectable } from "@angular/core";
import { Matches } from "../model/matches";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})

export class MatchServices{
    private matchUrl = 'http://localhost:8080/api/matches'
    constructor(private http:HttpClient){

    }
    getAuthUsers(): Observable<Matches[]> {
        return this.http.get<Matches[]>(this.matchUrl);
    }

    adminenroll(adminuser: Matches): Observable<any> {
        return this.http.post<any>(this.matchUrl, adminuser);
    }

    getUniqueMatches(): Observable<string[]> {
        return this.http.get<string[]>(this.matchUrl+'/unique-tournaments');
      }

      getTournamentMatches(tournamentName: string): Observable<Matches[]> {
        const params = new HttpParams().set('tournamentName', tournamentName);
        return this.http.get<Matches[]>(`${this.matchUrl}/tournament-matches`, { params });
      }

      deleteMatch(id:string):Observable<void> {
        return this.http.delete<void>(`${this.matchUrl}/${id}`);
    }
    updateMatch(id:string, match:any) {
        
        return this.http.put(`${this.matchUrl}/${id}`, match);
    }
    getMatchById(id: string) {
        return this.http.get<Matches>(`${this.matchUrl}/${id}`);
    }
    searchAdmins(query: string): Observable<any> {
        return this.http.get(`${this.matchUrl}/search`, { params: { query } });
      }
}   