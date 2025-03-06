import { Injectable } from "@angular/core";
import { Matches } from "../model/matches";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpParams } from '@angular/common/http';
import { Player } from "../model/players";

@Injectable({
    providedIn:"root"
})

export class PlayerServices{
    private playerUrl = 'http://localhost:8080/api/players'
    constructor(private http:HttpClient){

    }
    getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.playerUrl);
    }

    playerEnroll(player: Player): Observable<any> {
        return this.http.post<any>(this.playerUrl, player);
    }
    getTeamPlayer(team1Name: string): Observable<Player[]> {
        const params = new HttpParams().set('teamName', team1Name);
        return this.http.get<Player[]>(`${this.playerUrl}/team-Players`, { params });
    }
    deleteTeams(id:string):Observable<void> {
        return this.http.delete<void>(`${this.playerUrl}/${id}`);
    }
    getPlayerById(id: string) {
        return this.http.get<Player>(`${this.playerUrl}/${id}`);
    }

    updatePlayer(id:string, player:any) {
        
        return this.http.put(`${this.playerUrl}/${id}`, player);
    }

    
      
}   